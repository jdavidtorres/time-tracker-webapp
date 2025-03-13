import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router, RouterLink } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	imports: [
		CommonModule,
		FormsModule,
		RouterLink,
		CardModule,
		FloatLabelModule,
		InputTextModule,
		ButtonModule
	]
})
export class LoginComponent implements OnInit {

	constructor(private readonly authService: AuthService, private readonly router: Router) { }

	username: string = '';
	password: string = '';

	ngOnInit(): void {
		if (this.authService.isAuthenticated()) {
			this.router.navigate(['/']);
		}
	}

	onSubmit(): void {
		this.authService.login(this.username, this.password);
	}
}
