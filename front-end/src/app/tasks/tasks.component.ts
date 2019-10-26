import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks : Object [] ;
  
  constructor(private task : TaskService , private flashMessage : FlashMessagesService) { }
  
  ngOnInit() {
    this.task.listAllTasks().subscribe(
      res => {
        if(res['status'] === 'done'){
          this.tasks = res['data'];
        } else {
          this.flashMessage.show(`${res['status'] } : ${res['error'] }` , {cssClass : 'alert-danger'});
        }
      },
      err => {
        this.flashMessage.show( err.message , {cssClass : 'alert-danger'});
      }
    );
  }

  removeTask(_id : string){
    this.task.deleteTask(_id).subscribe(
      res => {
        if(res['status'] === 'done'){
          this.flashMessage.show(`${res['status'] } : Task Deleted Successfully` , {cssClass : 'alert-success'});
          this.tasks = this.tasks.filter(task => task['_id'] !== _id);
        } else {
          this.flashMessage.show(`${res['status'] } : ${res['error'] }` , {cssClass : 'alert-danger'});
        }
      },
      err => {
        this.flashMessage.show( err.message , {cssClass : 'alert-danger'});
      }
    );
  }

}
