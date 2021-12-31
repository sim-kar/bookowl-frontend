import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: [
    '../../../assets/styles/page-width.css',
    '../../../assets/styles/list.css',
    './reviews-page.component.css',
  ],
})
export class ReviewsPageComponent implements OnInit {
  reviews: Review[] = [];
  imageWidth: number = 50;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getPopularBooks();
  }

  getPopularBooks() {
    this.reviewService.getAllReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }
}
