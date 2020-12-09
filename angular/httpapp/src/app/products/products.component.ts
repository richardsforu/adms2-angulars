import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  constructor(private router: Router, private ps: ProductService) { }

  products:any=[]

  onSelect(product) {
    this.router.navigate(['/product', product.id])
  }
  ngOnInit(): void {
    this.products = this.ps.findAll();
   
    
  }
}
