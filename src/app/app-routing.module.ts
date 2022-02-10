import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddtaskFormComponent } from './components/addtask-form/addtask-form.component';

const routes: Routes = [
  {path:'', component:TasksComponent},
  {path:'form', component:AddtaskFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
