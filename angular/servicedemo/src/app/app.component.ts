import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicedemo';

   prod=null;

   products=new Array<Product>();
   prods=[];
  
   constructor(private ps:ProductService){
    this.prods=ps.loadProducts();
    console.log(ps.loadProducts());
    
   }
   

   getProduct(){
     
     console.log(this.products);
     
     this.prod=new Product();
     this.prod.id ='P001';
     this.prod.name='Pen'
     this.prod.price=763;
     this.prod.imgUrl='http://blabla';

     this.ps.addProduct(this.prod);
     
   }

}

