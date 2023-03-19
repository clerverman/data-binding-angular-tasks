import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  @Output() task = new EventEmitter<Task>();
  @Output() taskEditted = new EventEmitter<Task>();

  newTask: Task = {
    label: '',
    completed: false
  }
  isEmpty: boolean = false;
  toEdit: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addNewTask()
  {
    this.taskService.insert(this.newTask)
      .subscribe((t)=>{
        this.task.emit(t);
        this.clearData();
      })
  }

  updateTask()
  {
    this.taskService.update(this.newTask)
      .subscribe((t) => {
        this.taskEditted.emit(t);
      })
  }

  clearData()
  {
    this.newTask = {
      label: '',
      completed: false
    }
    this.isEmpty = false;
  }

  displayAddTask()
  {
    this.newTask.label.length == 0 ? this.isEmpty = false : this.isEmpty = true;
  }

}
