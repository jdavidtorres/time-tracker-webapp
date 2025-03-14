import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private apiUrl = 'http://localhost/api/tasks';
	private readonly httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

	constructor(private http: HttpClient) { }

	getTasks(): Observable<Task[]> {
		return this.http.get<Task[]>(`${this.apiUrl}`);
	}

	createTask(task: Task): Observable<Task> {
		return this.http.post<Task>(`${this.apiUrl}`, task);
	}

	updateTask(task: Task): Observable<Task> {
		return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
	}

	deleteTask(taskId: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
	}

	startTaskTimer(taskId: string) {
		return this.http.post(`${this.apiUrl}/${taskId}/start`, {});
	}

	pauseTaskTimer(taskId: string) {
		return this.http.post(`${this.apiUrl}/${taskId}/pause`, {});
	}

	resumeTaskTimer(taskId: string) {
		return this.http.post(`${this.apiUrl}/${taskId}/resume`, {});
	}

	stopTaskTimer(taskId: string) {
		return this.http.post(`${this.apiUrl}/${taskId}/stop`, {});
	}
}
