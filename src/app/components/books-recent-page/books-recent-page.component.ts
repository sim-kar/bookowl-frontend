import { Component, OnInit } from '@angular/core';
import { AggregatedBook } from '../../interfaces/aggregated-book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-recent-page',
  templateUrl: './books-recent-page.component.html',
  styleUrls: [
    '../../../assets/styles/page-width.css',
    '../../../assets/styles/list.css',
    './books-recent-page.component.css',
  ],
})
export class BooksRecentPageComponent implements OnInit {
  recentBooks: AggregatedBook[] = [];
  imageWidth: number = 50;
  limit: number = 100;
  // pagination
  p: number = 1;
  itemsPerPage: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getRecentBooks();
  }

  getRecentBooks() {
    this.bookService.getRecentlyUpdatedBooks(this.limit).subscribe((books) => {
      this.recentBooks = books;
    });
  }
}
