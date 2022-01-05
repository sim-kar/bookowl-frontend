import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusService } from '../../services/status.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-books-user-status-page',
  templateUrl: './books-user-status-page.component.html',
  styleUrls: ['../../../assets/styles/page-width.css', './books-user-status-page.component.css'],
})

/**
 * A page displaying a user's books with a certain status. The status can be read, reading,
 * or want to read.
 */
export class BooksUserStatusPageComponent implements OnInit {
  username: string = '';
  header: string = '';
  books: Book[] = [];

  constructor(private statusService: StatusService, private route: ActivatedRoute) {
  }

  /** Get the username, the status as a string, and the user's books with that status. */
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      // replace hyphens and capitalize
      this.header = params['status']
        .replaceAll('-', ' ');
      this.header = this.header
        .charAt(0)
        .toUpperCase()
        + this.header.slice(1);

      // if books are already in session history, no need to load from db
      if (window.history.state.list) {
        this.books = window.history.state.list;
        return;
      }

      this.getBooks(params['status']);
    });
  }

  /** Get the user's books with the given status. */
  getBooks(statusString: string): void {
    let statusCode = -1;

    if (statusString === 'want-to-read') {
      statusCode = 0;
    } else if (statusString === 'reading') {
      statusCode = 1;
    } else if (statusString === 'read') {
      statusCode = 2;
    }

    if (statusCode !== -1) {
      this.statusService.getUserStatuses(this.username, statusCode)
        .subscribe((statuses) => {
          if (statuses) {
            statuses.forEach((status) => this.books.push(status.book));
          }
        });
    }
  }
}
