import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-recent-page',
  templateUrl: './books-recent-page.component.html',
  styleUrls: [
    '../../../assets/styles/page-width.css',
    './books-recent-page.component.css',
  ],
})
export class BooksRecentPageComponent implements OnInit {
  books: Book[] = [];
  ratings: number[] = [];
  limit: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getRecentBooks();
  }

  getRecentBooks() {
    this.bookService.getRecentlyUpdatedBooks(this.limit).subscribe((books) => {
      books.forEach((entry) => {
        this.books.push(entry.book);
        if (entry.averageRating) { this.ratings.push(entry.averageRating); }
      });
    });
  }
}
