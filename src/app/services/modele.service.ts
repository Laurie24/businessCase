import { Injectable } from '@angular/core';
import {Marque} from '../models/marque';
import {Annonce} from '../models/voiture';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Modele} from '../models/modele';

@Injectable({
  providedIn: 'root'
})

export class ModeleService {
  apiURL = 'http://localhost:8000/api/modeles';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  modeles: Modele[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Modele[]> {
    return this.http.get<Modele[]>(this.apiURL, this.httpOptions).pipe(retry(1),
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
