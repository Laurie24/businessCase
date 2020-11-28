import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { catchError, retry } from 'rxjs/internal/operators';

const API_URL = 'http://localhost:8000/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


  editUser(user: User): Observable<User> {
    return this.http.put<User>(API_URL + '/' + user.id, user, this.httpOptions).pipe(retry(1));

  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(API_URL, this.httpOptions).pipe(retry(1));
  }




}
