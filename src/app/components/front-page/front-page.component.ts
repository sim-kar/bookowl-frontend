import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', '../../../assets/styles/page-width.css'],
})
export class FrontPageComponent implements OnInit {
  popularBooks: Book[] = [];
  recentBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPopularBooks();
    this.getRecentlyUpdatedBooks();
  }

  getPopularBooks() {
    this.bookService.getPopularBooks(8).subscribe((books) => {
      books.forEach((entry) => this.popularBooks.push(entry.book));
    });
  }

  getRecentlyUpdatedBooks() {
    this.bookService.getRecentlyUpdatedBooks(8).subscribe((books) => {
      books.forEach((entry) => this.recentBooks.push(entry.book));
    });
  }
}
