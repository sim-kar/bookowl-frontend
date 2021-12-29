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
export class StarRatingComponent implements OnInit {
  @Input() maxRating: number = 0;
  @Input() rating: number = 0;
  @Input() active: boolean = true;
  @Output() newRatingEvent = new EventEmitter<number>();
  stars: string[] = [];

  ngOnInit(): void {
    this.setStars();
  }

  setStars(): void {
    for (let i = 0; i < this.maxRating; i++) {
      // show rating with material icons
      this.stars[i] = (i < this.rating) ? 'star' : 'star_border';
    }
  }

  setRating(rating: number): void {
    this.rating = rating + 1; // index starts at 0, so add 1
    this.setStars();
    this.newRatingEvent.emit(this.rating);
  }

  reset(): void {
    this.rating = 0;
    this.setStars();
  }

  previewRating(index: number) {
    for (let i = 0; i < this.maxRating; i++) {
      /* for some reason, the mouseover/mouseout event will behave erratically if using
      'star_border', but using a different icon such as 'star_outline' will fix the issue. */
      this.stars[i] = (i <= index) ? 'star' : 'star_outline';
    }
  }
}
