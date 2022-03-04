import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(formData: FormData) {
    return this.http.post('http://localhost:8084/addUser',formData)
  }
  getUsersList(formData: FormData) {
    return this.http.post('http://localhost:8084/getUsersList',formData)
  }

  constructor(private http: HttpClient) { }
}
