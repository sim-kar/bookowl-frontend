import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-recent-page',
  templateUrl: './books-recent-page.component.html',
  styleUrls: ['../../../assets/styles/page-width.css', './books-recent-page.component.css'],
})

/** A page displaying the most recently updated (user status) books, not including duplicates. */
export class BooksRecentPageComponent implements OnInit {
  books: Book[] = [];
  limit: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getRecentBooks();
  }

  /** Get the most recent books. */
  getRecentBooks() {
    this.bookService.getRecentlyUpdatedBooks(this.limit).subscribe((books) => {
      books.forEach((entry) => { this.books.push(entry.book); });
    });
  }
}
