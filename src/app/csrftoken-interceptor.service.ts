import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { Meta } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class CsrftokenInterceptorService {

  constructor(
    private cookieService: CookieService,
   
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let prefix = ''
    
    console.log(this.cookieService.getAll());
    
    let csrfToken = this.cookieService.get(`csrftoken`)
    if (csrfToken) {
      request = request.clone({
        setHeaders: {
          'X-CSRFToken': csrfToken,
        },
      })
    }

    return next.handle(request)
  }
}
