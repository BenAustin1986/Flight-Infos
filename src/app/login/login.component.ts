import { Component } from '@angular/core';
import { AuthService } from '../auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `<button (click)="login()">Login</button>`
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {}

    login() {
      this.authService.login().then((result: any) => {
        this.router.navigate(['/flight-details']);
        console.log('User logged in:', result);
      }).catch((error: any) => {
        console.log('Login failed:', error);
      });
    }

    logout() {
      this.authService.logout().then(() => {
        this.router.navigate(['/login']);
      }).catch((error) => {
        console.error('Logout failed:', error);
      });
    }
}
