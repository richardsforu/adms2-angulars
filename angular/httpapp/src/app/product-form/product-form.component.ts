import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isYieldExpression } from 'typescript';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  isAddMode: boolean;
  loading = false;
  submitted = false;
  btnLbl="Save";
  public id;
  editId=false;
  prodForm: FormGroup;
  constructor(private route: Router, private fb: FormBuilder, private ps: ProductService, private router: ActivatedRoute) { }

  editProduct(product) {

    this.prodForm = this.fb.group(product);
  }


  saveProduct() {
    this.ps.addProduct(this.prodForm.value).subscribe(response => {
      console.log(response);
      this.route.navigate(['/products']);

    })
  }

  cancelForm(){
    this.route.navigate(['']);
  }
  ngOnInit(): void {
    console.log("<<<<<< "+ this.isAddMode);

    this.id = this.router.snapshot.paramMap.get('id');
    this.isAddMode = !this.id;
    
    if (!this.isAddMode) {
      this.editId=true;
      this.btnLbl="Update";
      this.ps.findProduct(this.id).subscribe(response => this.prodForm.patchValue(response));

    }


    this.prodForm = this.fb.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        price: ['', [Validators.required]],
        description: ['', [Validators.required]]
      }
    )
  }

}
