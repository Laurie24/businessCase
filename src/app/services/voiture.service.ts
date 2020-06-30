import { Injectable } from '@angular/core';
import {Voiture} from '../models/voiture';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL = 'http://localhost:3000/voiture';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getAll(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getOneVoitureById(id: number): Observable<Voiture> {
    return this.http.get<Voiture>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addVoiture(voiture: Voiture): Observable<Voiture>{
    return this.http.post<Voiture>(this.apiURL, voiture, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteVoiture(id: number): Observable<Voiture>{
    return this.http.delete<Voiture>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(planet: Voiture){
    return this.http.put<Voiture>(this.apiURL + '/' + planet.id , planet, this.httpOptions).pipe(
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

  filteredVehicule(searchEngine: Voiture, vehiculeSource: Voiture[]) {
    console.log('search engine', searchEngine);
    console.log('voitures', vehiculeSource);
    let newCarArray: Voiture[];
    newCarArray = vehiculeSource.filter(car => car.marque === searchEngine.marque);
    return newCarArray;
  }
}
