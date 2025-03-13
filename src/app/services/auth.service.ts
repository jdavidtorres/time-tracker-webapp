import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private apiUrl = 'http://localhost/api/auth';
	private readonly httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

	constructor(private http: HttpClient) { }

	register(username: string, password: string) {
		return this.http.post<any>(`${this.apiUrl}/register`, { username, password }, { headers: this.httpHeader })
			.subscribe();
	}

	login(username: string, password: string) {
		return this.http.post<any>(`${this.apiUrl}/login`, { username, password }, { headers: this.httpHeader })
			.subscribe({
				next: (response: any) => {
					localStorage.setItem('token', response.token);
				},
				error: (error: any) => {
					console.error(error);
				}
			});
	}

	logout() {
		localStorage.removeItem('token');
	}

	getUsername(): string | null {
		const token = this.getToken();
		if (!token) {
			return null;
		}

		const payload = JSON.parse(atob(token.split('.')[1]));
		return payload.username;
	}

	isAuthenticated(): boolean {
		return !!this.getToken();
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}
}
