import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AngularInfoComponent } from './angular-info/angular-info.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'angular-info', component: AngularInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
