import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addCategory(category: import("./products/products.component").Category) {
    return this.http.post('http://localhost:8084/addCategory',category)
  }
  getCategories() {
    return this.http.get('http://localhost:8084/getCategories');
  }
  addUser(formData: FormData) {
    return this.http.post('http://localhost:8084/addUser',formData)
  }
  getUsersList(formData: FormData) {
    return this.http.post('http://localhost:8084/getUsersList',formData)
  }

  constructor(private http: HttpClient) { }
}
