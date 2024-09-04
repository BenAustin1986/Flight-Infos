import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [],
  template: `
    <p>
      auth works!
    </p>
  `,
  styles: ``
})
export class AuthComponent {

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.authService.login().then(() => {
      this.router.navigate(['/flight-details']);
    }).catch((error) => {
      console.log('Login failed:', error);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log('Logout failed:', error);
    });
  }

}
