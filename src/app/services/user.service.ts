import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

/** Provides access to user data from the server */
export class UserService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  /**
   * Get a user.
   *
   * @param username the user's username.
   * @returns an Observable with the user.
   */
  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiBaseURL}/users/${username}`);
  }

  /**
   * Add a user.
   *
   * @param username the user's username.
   * @param email the user's email.
   * @param password the user's password.
   * @param gender the user's gender.
   * @param birthdate the user's birthdate.
   * @returns an Observable with a message from the server.
   */
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

  /**
   * Get a user's email address. Since the email is sensitive information it is censored.
   *
   * @param username the user's username.
   * @returns the (censored) email.
   */
  getUserEmail(username: string): Observable<string> {
    return this.http.get<string>(`${this.apiBaseURL}/users/${username}/email`);
  }

  /**
   * Updates a user's email address. Requires the user's password for authentication.
   *
   * @param username the user's username.
   * @param email the new email.
   * @param password the user's password.
   * @returns an Observable with a message from the server.
   */
  updateUserEmail(username: string, email: string, password: string): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/users/email`, {
      username,
      email,
      password,
    });
  }

  /**
   * Updates a user's password. Requires the user's current password for authentication.
   *
   * @param username the user's username.
   * @param newPassword the new password.
   * @param oldPassword the user's password.
   * @returns an Observable with a message from the server.
   */
  updateUserPassword(username: string, newPassword: string, oldPassword: string): Observable<{}> {
    return this.http.put(`${this.apiBaseURL}/users/password`, {
      username,
      newPassword,
      oldPassword,
    });
  }

  /**
   * Authenticate a user.
   *
   * @param username the user's username.
   * @param password the user's password.
   * @returns an Observable with the authorized token and username.
   */
  login(username: string, password: string):
  Observable<{ accessToken: string, username: string }> {
    return this.http.post<{ accessToken: string, username: string }>(
      `${this.apiBaseURL}/users/login`,
      { username, password },
    );
  }
}
