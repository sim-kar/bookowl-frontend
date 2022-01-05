import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

/** Displays a list of books, or a list of reviews, depending on the given input. Note that only
 * the list of books will be displayed if both are given. Has built-in pagination.
 */
export class ListComponent {
  @Input() books: Book[] | undefined;
  @Input() reviews: Review[] | undefined;
  @Input() ratings: number[] | undefined;
  @Input() header: string = '';
  imageWidth: number = 50;
  limit: number = 100;
  // pagination
  p: number = 1;
  itemsPerPage: number = 100;

  /**
   * Rounds a floating number to 2 decimals; integers are left untouched.
   *
   * @param rating the number to format.
   * @returns floating number with two decimals, or integer, as a string.
   */
  formatRating(rating: number | undefined): string {
    let output = '';

    if (rating) {
      output = Number.isInteger(rating) ? rating.toString() : rating.toFixed(2);
    }

    return output;
  }
}
