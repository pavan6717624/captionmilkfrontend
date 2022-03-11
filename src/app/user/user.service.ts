import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './products/products.component';
import { Product } from './details/details.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getProductReport(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/getProductReport',formData);
  }
  statusChange(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/statusChange',formData)
  }
  getProducts(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/getProducts',formData);
  }
  addProduct(product: Product) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/addProduct',product)
  }
  getRepeats() {
    return this.http.get('https://captionmilkbackend.herokuapp.com/getRepeats');
  }
  addRepeat(category: Category) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/addRepeat',category)
  }
  addCategory(category: Category) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/addCategory',category)
  }
  getCategories() {
    return this.http.get('https://captionmilkbackend.herokuapp.com/getCategories');
  }

  addBrand(category: Category) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/addBrand',category)
  }
  getBrands() {
    return this.http.get('https://captionmilkbackend.herokuapp.com/getBrands');
  }

  addQuantity(category: Category) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/addQuantity',category)
  }
  getQuantities() {
    return this.http.get('https://captionmilkbackend.herokuapp.com/getQuantities');
  }


  addUser(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/addUser',formData)
  }
  getUsersList(formData: FormData) {
    return this.http.post('https://captionmilkbackend.herokuapp.com/getUsersList',formData)
  }

  constructor(private http: HttpClient) { }
}
