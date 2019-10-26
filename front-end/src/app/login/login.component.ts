import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MyValidation } from '../my-validation';
import { UserService } from '../user.service';

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
              private route : ActivatedRoute , private user : UserService) { }

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
    this.user.loginOrSignupOrUpdateUser(this.loginForm.value , 'login').subscribe(
      res => {
        if(res['status'] === 'done'){
          this.flashMessage.show(`${res['status']} : Welcome `, { cssClass: "alert-success" })
          localStorage.setItem('token' , res['token']);
          localStorage.setItem('userInfo' , JSON.stringify(res['data']));
          this.router.navigate(['/home']);
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: "alert-danger" })
        }
      } ,
      err => {
        this.flashMessage.show(err.message , {cssClass : 'alert-danger'})
      }
    )
  }

}
