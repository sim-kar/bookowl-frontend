import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

/** Adds authorization header to HTTP requests. Should be first in interceptor order. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenHeaderKey: string = 'x-access-token';

  constructor(private tokenStorageService: TokenStorageService) { }

  /**
   * Adds authorization header with token to HTTP request.
   *
   * @param req the HTTP request.
   * @param next the next interceptor.
   * @returns an Observable with the HTTP event.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenStorageService.getToken();

    if (token) {
      authReq = req.clone({ headers: req.headers.set(this.tokenHeaderKey, token) });
    }

    return next.handle(authReq);
  }
}
