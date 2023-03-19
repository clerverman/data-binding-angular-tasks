import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  selectAll()
  {
    return this.http.get<Task[]>(environment.apiUrl);
  }

  completed(task: Task){
    return this.http.patch<Task>(`${environment.apiUrl}/${task.id}`, {completed:!task.completed});
  }

  insert(task: Task)
  {
    return this.http.post<Task>(environment.apiUrl,task);
  }

  delete(task: Task)
  {
    return this.http.delete<Task>(`${environment.apiUrl}/${task.id}`)
  }

  update(task: Task)
  {
    return this.http.put<Task>(environment.apiUrl,task);
  }

}
