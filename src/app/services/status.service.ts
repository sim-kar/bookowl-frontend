import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../interfaces/book';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root',
})

/** Provides access to status data from the server. */
export class StatusService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  /**
   * Get a status.
   *
   * @param username the user's username.
   * @param isbn the book's ISBN.
   * @returns an Observable with the status.
   */
  getStatus(username: string, isbn: string): Observable<Status> {
    return this.http.get<Status>(`${this.apiBaseURL}/statuses/${username}/book/${isbn}`);
  }

  /**
   * Get all statuses for a user.
   *
   * @param username the user's username.
   * @param status the statuses to get (0-2).
   * @returns an Observable with the statuses.
   */
  getUserStatuses(username: string, status: number): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.apiBaseURL}/statuses/${username}/status/${status}`);
  }

  /**
   * Add a status. The book the status is for can optionally be added alongside the status, in
   * case it isn't already in the database (or if it is uncertain whether it is or not).
   *
   * @param username the user's username.
   * @param isbn the book's ISBN.
   * @param status the status (0-2).
   * @param book the book to add (optional).
   * @returns an Observable with a message from the server.
   */
  addStatus(username: string, isbn: string, status: number, book?: Book): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/statuses`, {
      isbn,
      username,
      status,
      book,
    });
  }

  /**
   * Update a status.
   *
   * @param username the user's username.
   * @param isbn the book's ISBN.
   * @param status the status (0-2).
   * @returns an Observable with a message from the server.
   */
  updateStatus(username: string, isbn: string, status: number): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/statuses`, {
      isbn,
      username,
      status,
    });
  }

  deleteStatus(username: string, isbn: string): Observable<{}> {
    return this.http.delete(`${this.apiBaseURL}/statuses/${username}/book/${isbn}`);
  }
}
