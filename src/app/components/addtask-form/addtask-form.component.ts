import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-addtask-form',
  templateUrl: './addtask-form.component.html',
  styleUrls: ['./addtask-form.component.scss']
})
export class AddtaskFormComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private taskService: TaskService
    ) { }

  text: string;
  day: Date = new Date();
  reminder:boolean = false;
  editTask:boolean = false;
  task:Task;

  handleTaskSubmit(){
    console.log(this.text, new Date(this.day).toUTCString(), this.reminder)
    if(this.editTask){
      console.log('Edit called')
      this.task.text = this.text
      this.task.day = this.day
      this.task.reminder = this.reminder
      
      this.taskService.editTask(this.task).subscribe((task) => this.router.navigate(['/']));
    }else{
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.taskService.addTask(newTask).subscribe((task) => this.router.navigate(['/']))  
    }

    this.resetForm()
  }

  resetForm(){
    this.text = ''
    this.day = new Date();
    this.reminder = false
  }

  setValues(id:string){
    this.taskService.getTasks(id).subscribe(task => {
      console.log('task ',task)
      task.map(item => {
        if(item['id'] === parseInt(id)){
          console.log('item ',item)
          this.editTask = true
          this.task = item
          this.text = item.text
          this.day = item.day
          this.reminder = item.reminder
        }
      })
    })
  }

  ngOnInit(): void {
    console.log(this.route.queryParams.forEach(item => {
      console.log(item['id']);
      if(item['id']){
        this.setValues(item['id'])
      }
    }))
  }

}
