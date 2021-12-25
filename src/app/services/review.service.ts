import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiBaseURL}/reviews/`);
  }

  getReview(username: string, isbn: string): Observable<Review> {
    return this.http.get<Review>(`${this.apiBaseURL}/reviews/${username}/book/${isbn}`);
  }

  addReview(username: string, isbn: string, stars: number, text: string): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/reviews`, {
      isbn,
      username,
      stars,
      text,
    });
  }

  updateReview(username: string, isbn: string, stars: number, text: string): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/reviews`, {
      isbn,
      username,
      stars,
      text,
    });
  }

  deleteReview(username: string, isbn: string) {
    return this.http.delete(`${this.apiBaseURL}/reviews/${username}/book/${isbn}`);
  }
}
