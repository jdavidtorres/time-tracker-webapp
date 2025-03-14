import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	imports: [
		CommonModule,
		FormsModule
	]
})
export class TaskListComponent implements OnInit {
	tasks: Task[] = [];

	constructor(private taskService: TaskService) { }

	ngOnInit(): void {
		this.taskService.getTasks().subscribe(response => {
			this.tasks = response;
		});
	}

	createTask(task: any): void {
		this.taskService.createTask(task).subscribe(response => {
			this.tasks.push(response);
		});
	}

	deleteTask(taskId: string): void {
		this.taskService.deleteTask(taskId).subscribe(() => {
			this.tasks = this.tasks.filter(task => task.id !== taskId);
		});
	}

}
