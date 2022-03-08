import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getLoginDetails() {
    return this.http.get('https://captionmilkbackend.herokuapp.com/getLoginDetails')
  }
  verifyLoginOTP(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/verifyLoginOTP',formData);
  }
  sendLoginOTP(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/sendLoginOTP',formData);
  }
  verifyOTP(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/verifyOTP',formData);
  }

  constructor(private http: HttpClient) { }


  sendOTP(formData: FormData): Observable<any>
  {
    return this.http.post('https://captionmilkbackend.herokuapp.com/sendOTP',formData);
  }

}
