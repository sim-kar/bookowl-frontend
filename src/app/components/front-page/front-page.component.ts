import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', '../../../assets/styles/page-width.css'],
})

/** The front page of the website, displaying the most popular and recently added books. */
export class FrontPageComponent implements OnInit {
  popularBooks: Book[] = [];
  recentBooks: Book[] = [];
  limit: number = 8;

  constructor(private bookService: BookService) { }

  /** Get the books to display. */
  ngOnInit(): void {
    this.getPopularBooks(this.limit);
    this.getRecentlyUpdatedBooks(this.limit);
  }

  /**
   * Get the most popular books.
   * @param limit the maximum number of books to get.
   */
  getPopularBooks(limit: number) {
    this.bookService.getPopularBooks(limit).subscribe((books) => {
      books.forEach((entry) => this.popularBooks.push(entry.book));
    });
  }

  /**
   * Get the most recently added books (i.e. user status updates), ignoring duplicates.
   * @param limit the maximum number of books to get.
   */
  getRecentlyUpdatedBooks(limit: number) {
    this.bookService.getRecentlyUpdatedBooks(limit).subscribe((books) => {
      books.forEach((entry) => this.recentBooks.push(entry.book));
    });
  }
}
