import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ICustomer } from '../shared/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cust: any;
  constructor(private http: HttpClient) { }

  loadLogin(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('http://localhost:3000/customer').pipe(
      catchError(this.handleError)
    );
  }

  register(cust: ICustomer[]): Observable<ICustomer[]> {

    return this.http.post<ICustomer[]>('http://localhost:3000/customer', cust)

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

