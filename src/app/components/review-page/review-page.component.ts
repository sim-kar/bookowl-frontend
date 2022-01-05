import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../interfaces/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review-page.component.html',
  styleUrls: ['../../../assets/styles/page-width.css', './review-page.component.css'],
})

/** A page displaying a user review of a book */
export class ReviewPageComponent implements OnInit {
  review: Review | undefined;

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  /** Get the review. */
  ngOnInit(): void {
    // if review is already in session history, no need to load from db
    if (window.history.state.review) {
      this.review = window.history.state.review;
      return;
    }

    // if the review wasn't in session history, get it from db
    this.route.params
      .subscribe((params) => {
        this.reviewService.getReview(params['username'], params['isbn'])
          .subscribe((review) => {
            this.review = review;
          });
      });
  }

  /**
   * Format the date to YYYY-MM-DD.
   *
   * @param date the date to format.
   * @returns the formatted date.
   */
  getFormattedDate(date: string): string {
    return date.slice(0, 10);
  }
}
