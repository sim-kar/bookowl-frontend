import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root',
})

/** Provides access to review data from the server. */
export class ReviewService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  /**
   * Get all reviews.
   *
   * @returns an Observable with the reviews.
   */
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiBaseURL}/reviews/`);
  }

  /**
   * Get a book's reviews.
   *
   * @param isbn the ISBN of the book to get reviews for.
   * @returns an Observable with the reviews.
   */
  getReviewsForBook(isbn: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiBaseURL}/reviews/${isbn}`);
  }

  /**
   * Get a book review written by a user.
   *
   * @param username the user's username.
   * @param isbn the book's ISBN.
   * @returns an Observable with the review.
   */
  getReview(username: string, isbn: string): Observable<Review> {
    return this.http.get<Review>(`${this.apiBaseURL}/reviews/${username}/book/${isbn}`);
  }

  /**
   * Add a review.
   *
   * @param username the user's username.
   * @param isbn the ISBN of the book.
   * @param stars the rating (0-5).
   * @param text the review's text.
   * @returns an Observable with a message from the server.
   */
  addReview(username: string, isbn: string, stars: number, text: string): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/reviews`, {
      isbn,
      username,
      stars,
      text,
    });
  }

  /**
   * Update a review.
   *
   * @param username the user's username.
   * @param isbn the ISBN of the book.
   * @param stars the rating (0-5).
   * @param text the review's text.
   * @returns an Observable with a message from the server.
   */
  updateReview(username: string, isbn: string, stars: number, text: string): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/reviews`, {
      isbn,
      username,
      stars,
      text,
    });
  }

  /**
   * Delete a review.
   *
   * @param username the user's username.
   * @param isbn the ISBN of the book.
   */
  deleteReview(username: string, isbn: string) {
    return this.http.delete(`${this.apiBaseURL}/reviews/${username}/book/${isbn}`);
  }
}
