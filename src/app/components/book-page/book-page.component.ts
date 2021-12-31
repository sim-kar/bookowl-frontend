import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { StatusService } from '../../services/status.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css', '../../../assets/styles/form.css'],
})
export class BookPageComponent implements OnInit {
  username: string = '';
  userStatus: number = -1;
  language: string = '';
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
    private reviewService: ReviewService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // if logged in, get book's status for the user
    const loggedInUser = this.tokenStorageService.getUser();
    if (loggedInUser) {
      this.username = loggedInUser;
      this.route.params.subscribe((params) => {
        this.statusService.getStatus(this.username, params['isbn'])
          .subscribe((status) => {
            if (status) {
              this.userStatus = status.status;
              this.book = status.book;
              this.language = this.getLanguageFromCode(this.book.language);
            }
          });
      });
    }

    // if book is already in session history, no need to load from db (could also be from open API)
    if (window.history.state.book) {
      this.book = window.history.state.book;
      this.language = this.getLanguageFromCode(this.book.language);
      return;
    }

    // if the book wasn't retrieved with the status, and wasn't in session history, get it from db
    if (!this.book.isbn) {
      this.route.params
        .subscribe((params) => {
          this.bookService.getBook(params['isbn'])
            .subscribe((book) => {
              this.book = book;
              this.language = this.getLanguageFromCode(this.book.language);
            });
        });
    }
  }

  addStatus(statusCode: number): void {
    if (this.userStatus === -1) {
      // add book with status since it might be from open API, i.e. not in db yet
      this.statusService.addStatus(this.username, this.book.isbn, statusCode, this.book)
        .subscribe(() => { this.userStatus = statusCode; });

      return;
    }

    this.statusService.updateStatus(this.username, this.book.isbn, statusCode)
      .subscribe(() => {
        this.userStatus = statusCode;
      });
  }

  remove(): void {
    this.statusService.deleteStatus(this.username, this.book.isbn)
      .subscribe(() => {
        this.userStatus = -1;
      });
  }

  /* Convert language code to language in english */
  getLanguageFromCode(languageCode: string): string {
    const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
    return languageNames.of(languageCode);
  }
}
