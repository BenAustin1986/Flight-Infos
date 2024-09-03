import { Component } from '@angular/core';
import { AuthService } from '../auth/login.service'; // Adjust the path as necessary
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService) { }

  // This method returns an observable that tells if the user is logged in or not
  isLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  // Method to trigger login
  login(): void {
    this.authService.login();
  }

  // Method to trigger logout
  logout(): void {
    this.authService.logout();
  }
}
