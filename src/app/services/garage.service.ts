import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Garage} from '../models/garage';
import {Annonce} from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  apiURL = 'http://localhost:8000/api/garages';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getAll(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getOneGarageById(id: number): Observable<Garage> {
    return this.http.get<Garage>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addGarage(garage: Garage): Observable<Garage>{
    return this.http.post<Garage>(this.apiURL, garage, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteGarage(id: number): Observable<Garage>{
    return this.http.delete<Garage>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(garage: Garage){
    return this.http.put<Garage>(this.apiURL + '/' + garage.id , garage, this.httpOptions).pipe(
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
