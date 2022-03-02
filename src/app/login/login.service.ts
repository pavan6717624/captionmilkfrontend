import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  verifyLoginOTP(formData: FormData) {
    return this.http.post('http://localhost:8084/verifyLoginOTP',formData);
  }
  sendLoginOTP(formData: FormData) {
    return this.http.post('http://localhost:8084/sendLoginOTP',formData);
  }
  verifyOTP(formData: FormData) {
    return this.http.post('http://localhost:8084/verifyOTP',formData);
  }

  constructor(private http: HttpClient) { }


  sendOTP(formData: FormData): Observable<any>
  {
    return this.http.post('http://localhost:8084/sendOTP',formData);
  }

}
