import { Book } from './book';

/**
 * A user status for a book, i.e. whether the user has read the book (2), is reading it (1),
 * or wants to read it (0). Contains a reference to the book.
 */
export interface Status {
  isbn: string;
  username: string;
  status: number; // 0: want to read, 1: reading, 2: read
  date: string;
  book: Book;
}
