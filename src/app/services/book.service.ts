import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  searchBooksByTitle(title: string, limit?: number): Observable<Book[]> {
    const options = limit ? { params: new HttpParams().set('limit', limit) } : {};
    return this.http.get<Book[]>(`${this.apiBaseURL}/books/title/${title}`, options);
  }

  searchBooksByAuthor(author: string, limit?: number): Observable<Book[]> {
    const options = limit ? { params: new HttpParams().set('limit', limit) } : {};
    return this.http.get<Book[]>(`${this.apiBaseURL}/books/author/${author}`, options);
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiBaseURL}/books/${isbn}`);
  }

  getRecentlyUpdatedBooks(limit: number, statusFilter?: number): Observable<Book[]> {
    const options = statusFilter ? {
      params: new HttpParams().set('limit', limit).append('statusFilter', statusFilter),
    } : {};

    return this.http.get<Book[]>(
      `${this.apiBaseURL}/books/recently-updated`,
      options,
    );
  }

  addBook(book: Book): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/books`, book);
  }
}
