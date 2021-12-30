import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { AggregatedBook } from '../../interfaces/aggregated-book';

@Component({
  selector: 'app-books-highest-page',
  templateUrl: './books-highest-page.component.html',
  styleUrls: [
    '../../../assets/styles/page-width.css',
    '../../../assets/styles/list.css',
    './books-highest-page.component.css',
  ],
})
export class BooksHighestPageComponent implements OnInit {
  highestRatedBooks: AggregatedBook[] = [];
  imageWidth: number = 50;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getHighestRatedBooks();
  }

  getHighestRatedBooks() {
    this.bookService.getHighestRatedBooks(100).subscribe((books) => {
      this.highestRatedBooks = books;
    });
  }
}
