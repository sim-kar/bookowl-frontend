import { Book } from './book';

/**
 * A book with aggregated data. Can be the book's average rating, the user status update count,
 * or the date of the latest user status update.
 */
export interface AggregatedBook {
  _id: string;
  book: Book;
  averageRating?: number;
  count?: number;
  date?: string;
}
