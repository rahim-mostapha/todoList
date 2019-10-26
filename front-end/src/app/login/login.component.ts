import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MyValidation } from '../my-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  loginFormErrors : Object = {
    email : '',
    password : '',
  };

  constructor(private fb : FormBuilder , private flashMessage : FlashMessagesService , private router : Router , 
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['' , [Validators.required , Validators.pattern(/[a-zA-Z0-9_\-\.]+\@[a-zA-Z0-9_\-\.]{3,9}\.[a-zA-Z]{3,}/)]],
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(25)]]
    });
    this.loginForm.valueChanges.subscribe( _ => {
      this.getFormError();
    })
  }
  getFormError(){
    this.loginFormErrors = MyValidation.getFormError(this.loginForm);
  }
  hasError(field : string) {
    return MyValidation.hasError(this.loginForm , field);
  }

  onSubmit(){

  }

}
