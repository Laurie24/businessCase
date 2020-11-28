import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  apiURL = 'http://localhost:8000/api/photos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };
  constructor(private http: HttpClient) { }


  uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }
}
