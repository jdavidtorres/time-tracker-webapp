import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	imports: [
		CommonModule,
		FormsModule,
		RouterLink,
		CardModule,
		FloatLabelModule,
		InputTextModule,
		ButtonModule
	],
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	username: string = '';
	password: string = '';
	confirmPassword: string = '';

	constructor(private readonly authService: AuthService, private readonly router: Router) { }

	onSubmit() {
		if (this.password !== this.confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		this.authService.register(this.username, this.password);
	}
}
