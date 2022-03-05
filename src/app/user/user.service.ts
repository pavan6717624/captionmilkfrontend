import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './products/products.component';
import { Product } from './details/details.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addProduct(product: Product) {
    return this.http.post('http://localhost:8084/addProduct',product)
  }
  getRepeats() {
    return this.http.get('http://localhost:8084/getRepeats');
  }
  addRepeat(category: Category) {
    return this.http.post('http://localhost:8084/addRepeat',category)
  }
  addCategory(category: Category) {
    return this.http.post('http://localhost:8084/addCategory',category)
  }
  getCategories() {
    return this.http.get('http://localhost:8084/getCategories');
  }

  addBrand(category: Category) {
    return this.http.post('http://localhost:8084/addBrand',category)
  }
  getBrands() {
    return this.http.get('http://localhost:8084/getBrands');
  }

  addQuantity(category: Category) {
    return this.http.post('http://localhost:8084/addQuantity',category)
  }
  getQuantities() {
    return this.http.get('http://localhost:8084/getQuantities');
  }


  addUser(formData: FormData) {
    return this.http.post('http://localhost:8084/addUser',formData)
  }
  getUsersList(formData: FormData) {
    return this.http.post('http://localhost:8084/getUsersList',formData)
  }

  constructor(private http: HttpClient) { }
}
