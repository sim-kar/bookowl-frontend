import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

/* Adds authorization header to HTTP requests */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenHeaderKey: string = 'x-access-token';

  constructor(private tokenStorageService: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenStorageService.getToken();

    if (token) {
      authReq = req.clone({ headers: req.headers.set(this.tokenHeaderKey, token) });
    }

    return next.handle(authReq);
  }
}
