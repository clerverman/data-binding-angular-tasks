import { Component, OnInit} from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[] = [];
  taskItem!: Task ;

  constructor(private serviceTask:TaskService) { }

  ngOnInit(): void {
    this.displayTasks();
  }

  displayTasks()
  {
    this.serviceTask.selectAll()
      .subscribe( tasks => this.tasks = tasks);
  }

  getNewTask(newTask: Task)
  {
    this.tasks = [newTask,...this.tasks];
  }

  getTaskDeleted(taskDeleted: Task)
  {
    this.tasks = this.tasks.filter(task => task.id !== taskDeleted.id);
  }

  getTaskEdited(taskEditted: Task)
  {
    // this.tasks = this.tasks.filter(task => task.id !== taskDeleted.id);
    this.taskItem = taskEditted ;
  }

}
