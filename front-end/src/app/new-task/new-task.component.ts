import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MyValidation } from '../my-validation';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-tasl',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskForm : FormGroup;
  taskFormErrors : Object = {
    name : '',
    description : '',
    color : '',
  };

  pageCase : Object = {
    case : 'new'
  };

  constructor(private fb : FormBuilder , private task : TaskService ,
              private flashMessage : FlashMessagesService , private route : ActivatedRoute) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      name : ['' , [Validators.required , Validators.maxLength(20) , Validators.minLength(5)]],
      description : ['' , [Validators.required , Validators.maxLength(500) , Validators.minLength(10)]],
      color : ['#3c3c84'],
    });
    this.taskForm.valueChanges.subscribe(_ =>{
      this.getFormError();
    });
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.pageCase['case'] = 'update';
        this.pageCase['id'] = id;
        this.getUserData();
      }
    });
  }

  getUserData() {
    this.task.getTaskData(this.pageCase['id']).subscribe(
      (res) => {
        if(res['status'] === "done"){
          let data = res['data'];
          this.taskForm.patchValue({name : data['name'] , description : data['description'] , color : data['color']});
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: "alert-danger" });
        }
      },
      (err) => {
        console.log({err});
        this.flashMessage.show(err.message, { cssClass: "alert-danger" });
      }
    );
  }

  hasError(field){
    return MyValidation.hasError(this.taskForm , field);
  }

  getFormError() : void {
    this.taskFormErrors = MyValidation.getFormError(this.taskForm);
  }

  onSubmit() : void {
    let data = this.taskForm.value;
    if(this.pageCase['id']){
      data['_id'] = this.pageCase['id'];
    }
    this.task.newAndUpdateTask(data , this.pageCase['case']).subscribe(
      (res) => {
        if(res['status'] === "done"){
          this.flashMessage.show(`${res['status']} : you can Login now `, { cssClass: "alert-success" });
          if(this.pageCase['case'] === 'update'){
            this.getUserData();
          } else {
            this.taskForm.patchValue({name : '' , description : '' , color : '#000'})
          }
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: "alert-danger" });
        }
      },
      (err) => {
        this.flashMessage.show(err.message, { cssClass: "alert-danger" });
      }
    );
  }
}
