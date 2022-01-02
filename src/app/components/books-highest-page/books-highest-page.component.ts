import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-highest-page',
  templateUrl: './books-highest-page.component.html',
  styleUrls: [
    '../../../assets/styles/page-width.css',
    './books-highest-page.component.css',
  ],
})
export class BooksHighestPageComponent implements OnInit {
  books: Book[] = [];
  ratings: number[] = [];
  limit: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getHighestRatedBooks();
  }

  getHighestRatedBooks() {
    this.bookService.getHighestRatedBooks(this.limit).subscribe((books) => {
      books.forEach((entry) => {
        this.books.push(entry.book);
        if (entry.averageRating) { this.ratings.push(entry.averageRating); }
      });
    });
  }
}
