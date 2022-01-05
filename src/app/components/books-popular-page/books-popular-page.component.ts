import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-popular-page',
  templateUrl: './books-popular-page.component.html',
  styleUrls: ['../../../assets/styles/page-width.css', './books-popular-page.component.css'],
})

/** A page displaying the most popular books. */
export class BooksPopularPageComponent implements OnInit {
  books: Book[] = [];
  limit: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPopularBooks();
  }

  /** Get the most popular books. */
  getPopularBooks() {
    this.bookService.getPopularBooks(this.limit).subscribe((books) => {
      books.forEach((entry) => { this.books.push(entry.book); });
    });
  }
}
