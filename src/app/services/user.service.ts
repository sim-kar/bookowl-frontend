import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiBaseURL}/users/${username}`);
  }

  addUser(
    username: string,
    email: string,
    password: string,
    gender: string,
    birthdate: string,
  ): Observable<{}> {
    return this.http.post(`${this.apiBaseURL}/users`, {
      username,
      email,
      password,
      gender,
      birthdate,
    });
  }

  getUserEmail(username: string): Observable<string> {
    return this.http.get<string>(`${this.apiBaseURL}/users/${username}/email`);
  }

  updateUserEmail(username: string, email: string, password: string): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/users/email`, {
      username,
      email,
      password,
    });
  }

  updateUserPassword(username: string, newPassword: string, oldPassword: string): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/users/password`, {
      username,
      newPassword,
      oldPassword,
    });
  }

  login(username: string, password: string):
  Observable<{ accessToken: string, username: string }> {
    return this.http.post<{ accessToken: string, username: string }>(
      `${this.apiBaseURL}/users/login`,
      { username, password },
    );
  }
}
