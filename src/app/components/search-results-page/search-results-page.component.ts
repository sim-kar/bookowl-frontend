import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css', '../../../assets/styles/page-width.css'],
})

/** A page displaying search results. */
export class SearchResultsPageComponent implements OnInit {
  books: Book[] = [];
  maxResults: number = 40;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  /** Get the search results using the URL parameters. */
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['find'] === 'book') {
        this.bookService.searchBooksByTitle(params['keyword'], this.maxResults)
          .subscribe((books) => { this.books = books; });
      } else if (params['find'] === 'author') {
        this.bookService.searchBooksByAuthor(params['keyword'], this.maxResults)
          .subscribe((books) => { this.books = books; });
      }
    });
  }
}
