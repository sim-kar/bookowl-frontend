import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../interfaces/book';
import { AggregatedBook } from '../interfaces/aggregated-book';

@Injectable({
  providedIn: 'root',
})

/** Provides access to book data from the server. */
export class BookService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  /**
   * Search for books with the given title, using Google Books API.
   *
   * @param title the title to search for.
   * @param limit the maximum amount of results to get.
   * @returns  an Observable with the found books.
   */
  searchBooksByTitle(title: string, limit?: number): Observable<Book[]> {
    const options = limit ? { params: new HttpParams().set('limit', limit) } : {};
    return this.http.get<Book[]>(`${this.apiBaseURL}/books/title/${title}`, options);
  }

  /**
   * Search for books with by the given author, using Google Books API.
   *
   * @param author the author to search for.
   * @param limit the maximum amount of results to get.
   * @returns  an Observable with the found books.
   */
  searchBooksByAuthor(author: string, limit?: number): Observable<Book[]> {
    const options = limit ? { params: new HttpParams().set('limit', limit) } : {};
    return this.http.get<Book[]>(`${this.apiBaseURL}/books/author/${author}`, options);
  }

  /**
   * Get a book by its ISBN.
   *
   * @param isbn the book's ISBN.
   * @returns an Observable with the book.
   */
  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiBaseURL}/books/${isbn}`);
  }

  /**
   * Get the highest rated books. The books are returned including their average rating.
   *
   * @param limit the maximum amount of results to get.
   * @returns an Observable with the aggregated books (includes average rating).
   */
  getHighestRatedBooks(limit: number): Observable<AggregatedBook[]> {
    const options = { params: new HttpParams().set('limit', limit) };

    return this.http.get<AggregatedBook[]>(
      `${this.apiBaseURL}/books/highest-rated`,
      options,
    );
  }

  /**
   * Get the most recently updated (i.e. user status) books. The books are returned including the
   * date they were updated.
   *
   * @param limit the maximum amount of results to get.
   * @param statusFilter which status to limit results to (optional).
   * @returns an Observable with the aggregated books (includes update date).
   */
  getRecentlyUpdatedBooks(limit: number, statusFilter?: number): Observable<AggregatedBook[]> {
    const options = statusFilter ? {
      params: new HttpParams().set('limit', limit).append('statusFilter', statusFilter),
    } : { params: new HttpParams().set('limit', limit) };

    return this.http.get<AggregatedBook[]>(
      `${this.apiBaseURL}/books/recently-updated`,
      options,
    );
  }

  /**
   * Get the most popular books (i.e. most status updates in a recent timeframe). The books are
   * returned including the recent status update count.
   *
   * @param limit  the maximum amount of results to get.
   * @param statusFilter which status to limit results to (optional).
   * @returns an Observable with the aggregated books (includes recent status update count).
   */
  getPopularBooks(limit: number, statusFilter?: number): Observable<AggregatedBook[]> {
    const options = statusFilter ? {
      params: new HttpParams().set('limit', limit).append('statusFilter', statusFilter),
    } : { params: new HttpParams().set('limit', limit) };

    return this.http.get<AggregatedBook[]>(
      `${this.apiBaseURL}/books/popular`,
      options,
    );
  }

  /**
   * Adds a book.
   *
   * @param book the book to add.
   * @returns an Observable with a message from the server.
   */
  addBook(book: Book): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/books`, book);
  }
}
