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
  limit: number = 100;
  // pagination
  p: number = 1;
  itemsPerPage: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPopularBooks();
  }

  getPopularBooks() {
    this.bookService.getPopularBooks(this.limit).subscribe((books) => {
      this.popularBooks = books;
    });
  }
}
