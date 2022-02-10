import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  
  constructor(private router: Router) {
  }

  @Input() task: Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() toggleTaskAlert: EventEmitter<Task> =  new EventEmitter();

  ngOnInit(): void {
  }

  deleteTask(){
    this.onDeleteTask.emit(this.task)
  }

  toggleAlert(){
    console.log('Toggle Alert')
    this.toggleTaskAlert.emit(this.task)
  }

  editTask(){
    console.log(this.task.id)
    this.router.navigate(['/form'],{ queryParams: { id: this.task.id } })
  }

}
