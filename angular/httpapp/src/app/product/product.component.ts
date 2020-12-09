import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: ActivatedRoute, private ps: ProductService) { }

  product:any;
  public id;

  ngOnInit(): void {
    // old approach
    //let id = this.router.snapshot.paramMap.get('id');
    // paramMap available from angular 4 and above
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.ps.findProduct(this.id).subscribe(response => this.product = response);

    })
  }
}
