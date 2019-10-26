import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
// import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  loginOrSignupOrUpdateUser(data , path) : Observable<Object>{
    return this.http.post<Object>(`http://localhost:3000/user/${path}` , data , {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }).pipe(catchError(this.responsError));
  }

  responsError(error : HttpErrorResponse){
    if(error instanceof ErrorEvent){
      /// A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(error);;
  }

  isLoggedin() {
    let token = localStorage.getItem('token');
    if(token){
      let decoded = jwt_decode(token);
      const date = new Date(0); 
      date.setUTCSeconds(decoded.exp);
      return (date.valueOf() > new Date().valueOf());
    } else {
      return false;
    }
  }

}
