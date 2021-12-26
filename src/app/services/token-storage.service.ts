import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  tokenKey: string = 'auth-token';
  userKey: string = 'auth-user';

  logOut(): void {
    window.sessionStorage.clear();
  }

  setToken(token: string): void {
    window.sessionStorage.removeItem(this.tokenKey);
    window.sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(this.tokenKey);
  }

  setUser(username: string) {
    window.sessionStorage.removeItem(this.userKey);
    window.sessionStorage.setItem(this.userKey, username);
  }

  getUser(): string | null {
    return window.sessionStorage.getItem(this.userKey);
  }
}
