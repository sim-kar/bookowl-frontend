import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  books: Book[] = [];
  imageHeight: number = 192;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.searchBooksByTitle('lord of the rings');
  }

  searchBooksByTitle(title: string): void {
    this.bookService.searchBooksByTitle(title, 8).subscribe((books) => {
      this.books = books;
    });
  }
}
