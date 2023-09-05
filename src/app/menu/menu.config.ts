import { Routes } from "@angular/router";
import { WelcomeComponent } from "../welcome/welcome.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { AngularInfoComponent } from "../angular-info/angular-info.component";

export const routerConfig: Routes = [
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'todo-list',
		component: TodoListComponent
	},
	{
		path: 'angular-info',
		component: AngularInfoComponent
	}
]