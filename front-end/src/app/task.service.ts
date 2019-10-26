import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  newAndUpdateTask(data : Object , path : string) : Observable<Object>{
    let token = localStorage.getItem('token');
    return this.http.post<Object>(`http://localhost:3000/task/${path}` , data , {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responsError));
  }

  listAllTasks() : Observable<Object>{
    let token = localStorage.getItem('token');
    return this.http.get<Object>(`http://localhost:3000/task/list` , {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responsError));
  }
  
  deleteTask( _id : string ) : Observable<Object>{
    let token = localStorage.getItem('token');
    return this.http.delete<Object>(`http://localhost:3000/task/delete/${_id}` , {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responsError));
  }

  responsError(error : HttpErrorResponse) {
    if(error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(error);
  }

}
