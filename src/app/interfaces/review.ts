import { Book } from './book';

/** A book review by a user. Contains a reference to the reviewed book. */
export interface Review {
  isbn: string;
  username: string;
  stars: number;
  text: string;
  date: string;
  book: Book;
}
