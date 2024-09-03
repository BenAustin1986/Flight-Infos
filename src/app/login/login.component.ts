import { Component } from '@angular/core';
import { AuthService } from '../auth/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `<button (click)="login()">Login</button>`
})
export class LoginComponent {
    constructor(private authService: AuthService) {}

    login() {
      this.authService.loginWithGoogle().then((result) => {
        console.log('User logged in:', result);
      }).catch((error) => {
        console.log('Login failed:', error);
      });
    }
}
