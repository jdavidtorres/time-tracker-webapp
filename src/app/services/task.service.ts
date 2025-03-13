import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://your-backend-api.com/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.apiUrl}`);
  }

  createTask(task: any) {
    return this.http.post(`${this.apiUrl}`, task);
  }

  updateTask(task: any) {
    return this.http.put(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }
}
