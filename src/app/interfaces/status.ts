import { Book } from './book';

export interface Status {
  isbn: string;
  username: string;
  status: number; // 0: want to read, 1: reading, 2: read
  date: string;
  book: Book;
}
