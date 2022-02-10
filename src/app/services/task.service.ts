import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasksURL = 'http://localhost:5000/tasks';
  tasks:Observable<Task[]>

  constructor(private http: HttpClient) { }

  getTasks(id?:string): Observable<Task[]>{
    if(id && this.tasks){
      this.tasks.forEach((item: Task[]) => {
        if(item['id'] == id){
          console.log('inside get specific task ',item['id'])
          return item['id']
        }
      })
    }
    this.tasks = this.http.get<Task[]>(this.getTasksURL) 
    return this.tasks
  }

  deleteTask(task: Task): Observable<Task> {
    const taskURL = `${this.getTasksURL}/${task.id}`
    return this.http.delete<Task>(taskURL);
  }

  editTask(task: Task): Observable<Task>{
    const taskURL = `${this.getTasksURL}/${task.id}`
    return this.http.put<Task>(taskURL, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.getTasksURL, task, httpOptions)
  }
}
