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
	taskTimers: { [key: number]: any } = {};

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

	editTask(task: any): void {
		this.taskService.updateTask(task).subscribe(response => {
			const index = this.tasks.findIndex(t => t.id === task.id);
			if (index !== -1) {
				this.tasks[index] = response;
			}
		});
	}

	deleteTask(taskId: string): void {
		this.taskService.deleteTask(taskId).subscribe(() => {
			this.tasks = this.tasks.filter(task => task.id !== taskId);
		});
	}

	startTask(taskId: string): void {
		if (!this.taskTimers[taskId]) {
			this.taskTimers[taskId] = { startTime: new Date(), duration: 0 };
		}
	}

	pauseTask(taskId: string): void {
		if (this.taskTimers[taskId]) {
			const now = new Date();
			const elapsed = (now.getTime() - this.taskTimers[taskId].startTime.getTime()) / 1000;
			this.taskTimers[taskId].duration += elapsed;
			delete this.taskTimers[taskId].startTime;
		}
	}

	resumeTask(taskId: string): void {
		if (this.taskTimers[taskId] && !this.taskTimers[taskId].startTime) {
			this.taskTimers[taskId].startTime = new Date();
		}
	}

	stopTask(taskId: string): void {
		if (this.taskTimers[taskId]) {
			const now = new Date();
			const elapsed = (now.getTime() - this.taskTimers[taskId].startTime.getTime()) / 1000;
			this.taskTimers[taskId].duration += elapsed;
			delete this.taskTimers[taskId];
		}
	}
}
