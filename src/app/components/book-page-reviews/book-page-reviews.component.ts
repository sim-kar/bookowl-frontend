import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../interfaces/review';
import { ReviewService } from '../../services/review.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-book-page-reviews',
  templateUrl: './book-page-reviews.component.html',
  styleUrls: [
    '../../../assets/styles/form.css',
    './book-page-reviews.component.css',
  ],
})
export class BookPageReviewsComponent implements OnInit {
  @Input() status: number = -1;
  isbn: string = '';
  username: string = '';
  reviews: Review[] = [];
  writeReview: boolean = false;
  userReview: Review | undefined;
  rating: number = 0;
  text: string = '';
  posted: boolean = false;
  deleted: boolean = false;
  // pagination
  itemsPerPage: number = 10;
  p: number = 1;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.isbn = params['isbn'];

      const loggedInUser = this.tokenStorageService.getUser();
      if (loggedInUser) {
        this.username = loggedInUser;
      }

      this.getReviews();
    });
  }

  getReviews(): void {
    this.reviewService.getReviewsForBook(this.isbn).subscribe((reviews) => {
      if (reviews) {
        this.userReview = reviews.find((review) => review.username === this.username);
        // get current rating and text from the user's review if it exists
        this.rating = this.userReview ? this.userReview.stars : 0;
        this.text = this.userReview ? this.userReview.text : '';
        // don't show user's review with rest of reviews
        this.reviews = reviews.filter((review) => review.username !== this.username);
      }
    });
  }

  // only get yyyy-mm-dd
  getDate(date: string): string {
    return date.slice(0, 9);
  }

  getRating(rating: number) {
    this.rating = rating;
  }

  toggleReview(): void {
    this.writeReview = !this.writeReview;
  }

  addReview(): void {
    if (!this.userReview) {
      this.reviewService.addReview(this.username, this.isbn, this.rating, this.text)
        .subscribe(() => {
          this.posted = true;
          this.deleted = false;
        });
      return;
    }

    this.reviewService.updateReview(this.username, this.isbn, this.rating, this.text)
      .subscribe(() => {
        this.posted = true;
        this.deleted = false;
      });
  }

  deleteReview() {
    this.reviewService.deleteReview(this.username, this.isbn)
      .subscribe(() => {
        this.deleted = true;
        this.posted = false;
        this.userReview = undefined;
        this.text = '';
        this.rating = 0;
      });
  }
}
