import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from './custom-validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  regForm: FormGroup;
  isSubmited = false;

  constructor(private fb: FormBuilder,private customValidator:CustomValidationService) {

  }

  validateEmail(c: FormControl) {
    let numberregEx=new RegExp('[1-9][0-9]{5}');
    return false;
  }

  registerUser() {
    this.isSubmited = true;
    if (this.regForm.invalid)
      return;
    console.log(this.regForm.value);

  }

  get fc() {
    return this.regForm.controls;
  }

  ngOnInit() {
    this.regForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required]],
        emailAddress: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[1-9][0-9]{9}')]],
        pinCode: ['', [Validators.required, Validators.pattern('[1-9][0-9]{5}')]],
        password:  ['', [Validators.required,this.customValidator.patternValidator()]]

      }
    )


  }



}
