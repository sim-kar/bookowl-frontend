import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (environment.production === false) {
      return next.handle(req);
    }

    // clone request and replace 'http://' with 'https://'
    const secureReq = req.clone({
      url: req.url.replace('http://', 'https://'),
    });

    return next.handle(secureReq);
  }
}
