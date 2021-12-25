import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { AggregatedBook } from '../../interfaces/aggregated-book';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', '../../../assets/styles/page-width.css'],
})
export class FrontPageComponent implements OnInit {
  popularBooks: AggregatedBook[] = [];
  recentBooks: AggregatedBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPopularBooks();
    this.getRecentlyUpdatedBooks();
  }

  getPopularBooks() {
    this.bookService.getPopularBooks(8).subscribe((books) => {
      this.popularBooks = books;
    });
  }

  getRecentlyUpdatedBooks() {
    this.bookService.getRecentlyUpdatedBooks(8).subscribe((books) => {
      this.recentBooks = books;
    });
  }
}
