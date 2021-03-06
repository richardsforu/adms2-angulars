import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  products: any = [];
  product: any;

  httpBaseUrl = 'http://localhost:8080/api';
  findProduct(id) {
    return this.http.get(this.httpBaseUrl + `/products/${id}`);
  }

  findAll() {
    return this.http.get(this.httpBaseUrl + '/products');
  }

  addProduct(product) {
    return this.http.post(this.httpBaseUrl + '/products',  product);
  }

  removeProduct(id){
    return this.http.delete(this.httpBaseUrl + `/products/${id}`)
  }



}
