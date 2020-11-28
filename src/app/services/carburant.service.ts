import { Injectable } from '@angular/core';
import {Marque} from '../models/marque';
import {Annonce} from '../models/voiture';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Carburant} from '../models/carburant';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {
  apiURL = 'http://localhost:8000/api/carburants';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  carburants: Carburant[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Carburant[]> {
    return this.http.get<Carburant[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
