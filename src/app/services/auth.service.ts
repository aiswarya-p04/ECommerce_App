import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ICustomer } from '../shared/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
cust:any;
  constructor(private http:HttpClient) { }

  loadLogin():Observable<ICustomer[]>{
     return this.http.get<ICustomer[]>('http://localhost:3000/customer').pipe(
      catchError(this.handleError)
    );
    }

    register(cust: ICustomer[]): Observable<ICustomer[]> {

      return this.http.post<ICustomer[]>('http://localhost:3000/customer', cust)

    }
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
  }

