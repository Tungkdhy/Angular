import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs'; 
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:9002';
  private token = 'Rt8cUR8iH4q8RF4hOUK4vEBop0ramhQg';
  
  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login/`, credentials).pipe(
      map((res:any) => {
       
        if (res) {
          localStorage.setItem('token', this.token)
          // const cookie = this.cookieService.get('csrftoken')
          // console.log('CSRFToken: ', cookie)
          return true;
        }
        console.log('Đăng nhập thất bại')
        return false;
      }),
      catchError(this.handleError)
    );
  }

  changePassword(credentials: { old_password: string, new_password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/change-password/ `, credentials).pipe(
      map(res => {
        if (res) {
          console.log('Thay đổi mk thành công')
          return true;
        }
        console.log('Thay đổi mk thất bại')
        return false;
      }),
      catchError(this.handleError)
    );
  }

  // logout(): Observable<any>{
  //   const header = new HttpHeaders({
  //     'X-CSRFToken': this.token
  //   })
  //   return this.http.post<any>(`${this.apiUrl}/logout/ `,{}, { Headers: header } ).pipe(
  //     map(res => {
  //       localStorage.removeItem('token')
  //       this.router.navigate(['/login']);
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  logout(): void {
    localStorage.removeItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return error(error.message || error);
  }

}
