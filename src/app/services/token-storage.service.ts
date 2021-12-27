import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  tokenKey: string = 'auth-token';
  userKey: string = 'auth-user';

  logOut(): void {
    window.localStorage.clear();
  }

  setToken(token: string): void {
    window.localStorage.removeItem(this.tokenKey);
    window.localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return window.localStorage.getItem(this.tokenKey);
  }

  setUser(username: string) {
    window.localStorage.removeItem(this.userKey);
    window.localStorage.setItem(this.userKey, username);
  }

  getUser(): string | null {
    return window.localStorage.getItem(this.userKey);
  }
}
