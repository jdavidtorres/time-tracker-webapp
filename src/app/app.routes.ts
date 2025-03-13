import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
	{ path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard] },
	{ path: 'tasks/new', component: TaskFormComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '', redirectTo: '/tasks', pathMatch: 'full' }
];
