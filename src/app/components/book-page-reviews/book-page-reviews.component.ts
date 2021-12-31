import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../interfaces/review';
import { ReviewService } from '../../services/review.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-book-page-reviews',
  templateUrl: './book-page-reviews.component.html',
  styleUrls: [
    '../../../assets/styles/list.css',
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

  getReviews() {
    this.reviewService.getReviewsForBook(this.isbn).subscribe((reviews) => {
      if (reviews) {
        this.userReview = reviews.find((review) => review.username === this.username);
        // don't show user review with rest of reviews
        this.reviews = reviews.filter((review) => review.username !== this.username);
      }
    });
  }

  // only get yyyy-mm-dd
  getDate(date: string) {
    return date.slice(0, 9);
  }

  toggleReview() {
    this.writeReview = !this.writeReview;
  }
}
