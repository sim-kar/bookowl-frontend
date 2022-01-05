import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['../../../assets/styles/page-width.css', './reviews-page.component.css'],
})

/** A page displaying the most recent user reviews. */
export class ReviewsPageComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  /** Get the reviews. */
  getReviews() {
    this.reviewService.getAllReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }
}
