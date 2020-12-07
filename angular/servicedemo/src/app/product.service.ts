import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products= [
    {
      "id":"P001",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
      "name": "Sport Shoes",
      "price": 110
    },
    {
      "id":"P002",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
      "name": "Red SNEAKER",
      "price": 91
    },
    {
      "id":"P003",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
      "name": "Sport Shoes Women",
      "price": 94
    },
    {
      "id":"P004",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
      "name": "Winter boots children",
      "price": 143
    },
    {
      "id":"P005",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
      "name": "Sports shoes Red-White",
      "price": 150
    },
    {
      "id":"P006",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg",
      "name": "Black leather shoes",
      "price": 250
    },
    {
      "id":"P007",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg",
      "name": "Shoes Canvas",
      "price": 50
    },
    {
      "id":"P008",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg",
      "name": "Shoes White",
      "price": 85
    },
    {
      "id":"P009",
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg",
      "name": "Sneakers Yellow",
      "price": 125
    }    
  ]



  loadProducts() {
    return this.products;
  }

  addProduct(product){
    this.products.push(product);
  }




}
