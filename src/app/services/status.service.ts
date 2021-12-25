import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../interfaces/book';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  getStatus(username: string, isbn: string): Observable<Status> {
    return this.http.get<Status>(`${this.apiBaseURL}/statuses/${username}/book/${isbn}`);
  }

  getUserStatuses(username: string, status: number): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.apiBaseURL}/statuses/${username}/status/${status}`);
  }

  addStatus(username: string, isbn: string, status: number, book?: Book): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/statuses`, {
      isbn,
      username,
      status,
      book,
    });
  }

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
