import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/** Provides access to authorization tokens, and authorized users. */
export class TokenStorageService {
  tokenKey: string = 'auth-token';
  userKey: string = 'auth-user';

  /** Logs out by clearing authorized user and token. */
  logOut(): void {
    window.localStorage.clear();
  }

  /** Set authorized token. */
  setToken(token: string): void {
    window.localStorage.removeItem(this.tokenKey);
    window.localStorage.setItem(this.tokenKey, token);
  }

  /** Get authorized token. */
  getToken(): string | null {
    return window.localStorage.getItem(this.tokenKey);
  }

  /** Set authorized user */
  setUser(username: string) {
    window.localStorage.removeItem(this.userKey);
    window.localStorage.setItem(this.userKey, username);
  }

  /** Get authorized user */
  getUser(): string | null {
    return window.localStorage.getItem(this.userKey);
  }
}
