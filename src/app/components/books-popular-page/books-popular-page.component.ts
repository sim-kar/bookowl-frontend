import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { AggregatedBook } from '../../interfaces/aggregated-book';

@Component({
  selector: 'app-books-popular-page',
  templateUrl: './books-popular-page.component.html',
  styleUrls: [
    './books-popular-page.component.css',
    '../../../assets/styles/page-width.css',
    '../../../assets/styles/list.css',
  ],
})
export class BooksPopularPageComponent implements OnInit {
  popularBooks: AggregatedBook[] = [];
  imageWidth: number = 50;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPopularBooks();
  }

  getPopularBooks() {
    this.bookService.getPopularBooks(100).subscribe((books) => {
      this.popularBooks = books;
    });
  }
}
