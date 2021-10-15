import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private oidcSecurityService: OidcSecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.oidcSecurityService.getAccessToken();

    if (token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` }});
    }
    return next.handle(request);
  }
}
