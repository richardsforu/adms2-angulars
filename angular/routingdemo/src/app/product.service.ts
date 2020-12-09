import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    { id: 'P001', name: 'Pen', price: 7663, description: 'Ped Pen' },
    { id: 'P002', name: 'Book', price: 150, description: 'Java Book' },
    { id: 'P003', name: 'Mobile', price: 45000, description: 'Iphone 12 Pro Max' },
    { id: 'P004', name: 'Laptop', price: 7663, description: 'Mac Book Pro' },
    { id: 'P005', name: 'Pendrive', price: 1200, description: 'Samsung 2456GB' },
    { id: 'P006', name: 'Tab', price: 13500, description: 'Apple Air Pro' },
    { id: 'P007', name: 'Head Phones', price: 25000, description: 'Sony DX2500 Active noice cancelation' },
    { id: 'P008', name: 'Ear Pods', price: 24000, description: 'Apple Pods Pro' },
  ]

  findProduct(id) {
    let product = this.products.find(product => product.id == id);
    return product;
  }

  findAll() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

}
