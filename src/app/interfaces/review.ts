import { Book } from './book';

export interface Review {
  isbn: string;
  username: string;
  stars: number;
  text: string;
  date: string;
  book: Book;
}
