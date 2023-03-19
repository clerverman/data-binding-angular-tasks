import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task?: Task;
  @Output() tastDeleted = new EventEmitter<Task>();

  constructor(private serviceTask: TaskService) { }
  ngOnInit(): void {
  }

  toggleCompleted(task: Task)
  {
    return this.serviceTask.completed(task)
      .subscribe(()=>{
        task.completed = !task.completed;
      });
  }

  deleteTask(task: Task)
  {
    this.serviceTask.delete(task)
      .subscribe( t => {
        this.tastDeleted.emit(task);
      })
  }

}
