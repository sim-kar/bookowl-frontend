import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

/* Shows a list of books OR a list of reviews */
export class ListComponent implements OnInit {
  @Input() books: Book[] | undefined;
  @Input() reviews: Review[] | undefined;
  @Input() ratings: number[] | undefined;
  @Input() header: string = '';
  imageWidth: number = 50;
  limit: number = 100;
  // pagination
  p: number = 1;
  itemsPerPage: number = 100;

  ngOnInit(): void {
  }

  /* Formats a float to have 2 digits after the decimal point; integers are left untouched */
  formatRating(rating: number | undefined): string {
    let output = '';

    if (rating) {
      output = Number.isInteger(rating) ? rating.toString() : rating.toFixed(2);
    }

    return output;
  }
}
