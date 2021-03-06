import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';

const AUTH_API = 'http://localhost:8000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(credentials: User): Observable<any> {
    return this.http.post<any>(AUTH_API + 'login_check', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(AUTH_API + 'register', {
      username: user.username,
      nom: user.nom,
      password: user.password,
      prenom: user.prenom,
      telephone: user.telephone
    }, httpOptions);
  }
}
