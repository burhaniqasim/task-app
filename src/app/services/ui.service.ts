import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private enableAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.enableAddTask = !this.enableAddTask;
    this.subject.next(this.enableAddTask);
  }
}
