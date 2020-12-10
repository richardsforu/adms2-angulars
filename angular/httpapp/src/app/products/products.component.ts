import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private router: Router, private ps: ProductService) { }

  products: any = []



  editProduct(product) {
    this.router.navigate(['/form', product.id]);
  }
  deleteProduct(id) { 
    this.ps.removeProduct(id).subscribe(response=>{})
    this.router.navigate(['']);

  }

  onSelect(product) {
    this.router.navigate(['/product', product.id])
  }
  ngOnInit(): void {

    this.ps.findAll().subscribe(response => this.products = response);

  }
}
