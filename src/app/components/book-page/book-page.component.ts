import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
})
export class BookPageComponent implements OnInit {
  // FIXME: add Book model?
  book: Book = {
    authors: [],
    categories: [],
    cover: '',
    description: '',
    isbn: '',
    language: '',
    pages: 0,
    published: '',
    publisher: '',
    title: '',
  };

  constructor(
    private bookService: BookService,
    private statusService: StatusService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (window.history.state.book) {
      this.book = window.history.state.book;
      return;
    }

    this.route.params.subscribe((params) => {
      this.bookService.getBook(params['id']).subscribe((book) => { this.book = book; });
    });
  }

  addToBookshelf(): void {
    // since book might be from open API try to add it to db before adding status
    this.bookService.addBook(this.book).subscribe();
    // TODO: add status
  }
}
