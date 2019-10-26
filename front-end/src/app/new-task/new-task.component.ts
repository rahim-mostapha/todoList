import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MyValidation } from '../my-validation';

@Component({
  selector: 'app-new-tasl',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  signupForm : FormGroup;
  signupFormErrors : Object = {
    name : '',
    description : '',
    color : '',
  };

  pageCase : string = 'new';

  constructor(private fb : FormBuilder , private router : Router ,
              private flashMessage : FlashMessagesService , private route : ActivatedRoute) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name : ['' , [Validators.required , Validators.maxLength(20) , Validators.minLength(5)]],
      description : ['' , [Validators.required , Validators.maxLength(500) , Validators.minLength(10)]],
      color : ['' , [Validators.required]],
    });
    this.signupForm.valueChanges.subscribe(_ =>{
      this.getFormError();
    });
    // if(this.route.snapshot.routeConfig.path === 'updateUserInfo'){
    //   this.pageCase = 'update';
    //   this.signupForm.get('password').setValidators([]);
    //   this.getUserData();
    // }
  }

  getUserData() {
    // this.user.getUserData().subscribe(
    //   (res) => {
    //     if(res['status'] === "done"){
    //       let data = res['data'];
    //       this.user.setLocalStorage('userInfo' , JSON.stringify({email : data['email'] , fullName : `${data['firstname']} ${ data['lastname']}` , profile : data['profile']}));
    //       this.signupForm.patchValue({email : data['email'] , firstname : data['firstname'] , lastname : data['lastname']});
    //     } else {
    //       this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: "alert-danger" });
    //     }
    //   },
    //   (err) => {
    //     console.log({err});
    //     this.flashMessage.show(err.message, { cssClass: "alert-danger" });
    //   }
    // );
  }

  hasError(field){
    return MyValidation.hasError(this.signupForm , field);
  }

  getFormError() : void {
    this.signupFormErrors = MyValidation.getFormError(this.signupForm);
  }

  onSubmit() : void {
    // this.user.loginOrSignupOrUpdateUser(this.signupForm.value , this.pageCase).subscribe(
    //   (res) => {
    //     if(res['status'] === "done"){
    //       this.flashMessage.show(`${res['status']} : you can Login now `, { cssClass: "alert-success" });
    //       if(this.pageCase === 'update'){
    //         this.getUserData();
    //       } else this.router.navigate(['/login']);
    //     } else {
    //       this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: "alert-danger" });
    //     }
    //   },
    //   (err) => {
    //     this.flashMessage.show(err.message, { cssClass: "alert-danger" });
    //   }
    // );
  }
}
