import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) { }

  uploadFile(formData) {

    this.http.post('http://localhost:8000/store-images', formData).subscribe((response) => console.log(response),
      (error) => console.log(error)
    );
  }
}

