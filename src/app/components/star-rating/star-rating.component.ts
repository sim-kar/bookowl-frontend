import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})

/**
 * A star rating element. Can either be inactive and only display the rating, or be active and let
 * a user set the rating. Active ratings emit an event with the new rating when changed.
 */
export class StarRatingComponent implements OnInit {
  @Input() maxRating: number = 0;
  @Input() rating: number = 0;
  @Input() active: boolean = true;
  @Output() newRatingEvent = new EventEmitter<number>();
  stars: string[] = [];

  /** Set the stars to be displayed depending on the rating. */
  ngOnInit(): void {
    this.setStars();
  }

  /** Set filled in stars for the rating, and outlined stars for the rest. */
  setStars(): void {
    for (let i = 0; i < this.maxRating; i++) {
      // show rating with material icons
      this.stars[i] = (i < this.rating) ? 'star' : 'star_border';
    }
  }

  /**
   * Set the new rating, and update the displayed stars accordingly. Also emits the new rating.
   *
   * @param rating the index of the selected star rating.
   */
  onRatingChange(rating: number): void {
    this.rating = rating + 1; // index starts at 0, so add 1
    this.setStars();
    this.newRatingEvent.emit(this.rating);
  }

  /** Reset the star rating to 0. */
  reset(): void {
    this.rating = 0;
    this.setStars();
  }

  /**
   * Preview a star rating by filling in the stars up to and including the given index, and only
   * outlining the rest.
   *
   * @param index the index of the last star to fill in.
   */
  previewStars(index: number) {
    for (let i = 0; i < this.maxRating; i++) {
      // for some reason, the mouseover/mouseout event will behave erratically if using
      // 'star_border', but using a different icon such as 'star_outline' will fix the issue.
      this.stars[i] = (i <= index) ? 'star' : 'star_outline';
    }
  }
}
