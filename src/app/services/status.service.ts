import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  addStatus(isbn: string, username: string, status: number): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/statuses`, { isbn, username, status });
  }
}