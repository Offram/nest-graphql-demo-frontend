import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { AuthService } from '../services/auth.service';

const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    @Inject(DEFAULT_TIMEOUT) protected readonly defaultTimeout: number,
    private auth: AuthService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue)
    return next.handle(request).pipe(timeout(timeoutValueNumeric), catchError(err => {
      switch (err.status) {
        case 0:
          if (err.error instanceof ProgressEvent) {
            err.message = 'Connection Error';
          }
          break;
        case 401:
          // this.auth.logout();
          break;
        case 500:
          err.message = "Error occured while performing request";
          break;
        default:
          err.message = err.message || "Error occured while performing request";
      }

      return throwError(() => new Error(err));
    }));
  }
}
