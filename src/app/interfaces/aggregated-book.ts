import { Book } from './book';

export interface AggregatedBook {
  _id: string;
  book: Book;
  averageRating?: number;
  count?: number;
  date?: string;
}
