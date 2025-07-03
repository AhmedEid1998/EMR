// src/app/interceptors/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyI0ODQ1OSIsIjAxMjAzMDE0NjE2Il0sIkFjY291bnRTZXR1cElkIjoiMjUxNjYiLCJDb21wYW55SWQiOiIyMzkzOCIsIkFwcElkIjoiNCIsIkRldmljZUlkIjoiMjQ2NjMxMTIzMCIsIkRldmljZVR5cGUiOiJBbmRyb2lkIiwiVGltZVpvbmVJZCI6IkFmcmljYS9DYWlybyIsInJvbGUiOiJGdWxsQWNjZXNzIiwibmJmIjoxNzQ2OTYxNTY5LCJleHAiOjE3NDc1NjYzNjksImlhdCI6MTc0Njk2MTU2OX0.2q15a69ewtWLpNN16AalG5Kcup0KVkqzDSHUgJz6qes';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(clonedRequest);
  }
}
