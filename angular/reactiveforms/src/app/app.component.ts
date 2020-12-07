import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  regForm: FormGroup;
  isSubmited = false;

  constructor(private fb: FormBuilder) {

  }

  registerUser() {
    this.isSubmited = true;
    if(this.regForm.invalid)
    return;
    console.log(this.regForm.value);

  }

   get fc(){
    return this.regForm.controls;
  }

  ngOnInit() {
    this.regForm = this.fb.group(
      {
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        emailAddress: ['',Validators.required,Validators.email],
        mobileNumber: ['',Validators.required]
      }
    )


  }



}
