import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-popular-page',
  templateUrl: './books-popular-page.component.html',
  styleUrls: [
    './books-popular-page.component.css',
    '../../../assets/styles/page-width.css',
  ],
})
export class BooksPopularPageComponent implements OnInit {
  books: Book[] = [];
  ratings: number[] = [];
  limit: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPopularBooks();
  }

  getPopularBooks() {
    this.bookService.getPopularBooks(this.limit).subscribe((books) => {
      books.forEach((entry) => {
        this.books.push(entry.book);
        if (entry.averageRating) { this.ratings.push(entry.averageRating); }
      });
    });
  }
}
