import { Injectable } from '@angular/core';
import {Annonce} from '../models/voiture';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL = 'http://localhost:8000/api/annonces';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getAll(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getOneVoitureById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addVoiture(voiture: Annonce): Observable<Annonce>{
    return this.http.post<Annonce>(this.apiURL, voiture, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteVoiture(id: number): Observable<Annonce>{
    return this.http.delete<Annonce>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(planet: Annonce){
    return this.http.put<Annonce>(this.apiURL + '/' + planet.id , planet, this.httpOptions).pipe(
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

  filteredVehicule(searchEngine: Annonce, vehiculeSource: Annonce[]) {
    console.log('search engine', searchEngine);
    console.log('voitures', vehiculeSource);
    let newCarArray: Annonce[];
    newCarArray = vehiculeSource.filter(car => car.marque === searchEngine.marque);
    return newCarArray;
  }
}
