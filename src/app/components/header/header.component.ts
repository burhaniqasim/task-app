import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  disableAdd: boolean = false
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { 

      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationStart && evt.url.indexOf('form') >= 0) {
         console.log('disable add task ',evt.url, evt.url.indexOf('form'));
         this.disableAdd = true;
        } else{
          this.disableAdd = false;
        }
       });

    }
  

  ngOnInit(): void {
    console.log(this.router.url)
  }

  addTask(){
    this.router.navigate(['/form'])
  }

  addNewTask(task){
    console.log(task)
  }

}
