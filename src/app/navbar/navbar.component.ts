import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Flight Infos</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" *ngIf="!(isLoggedIn() | async)">
            <a class="nav-link" (click)="login()">Login</a>
          </li>
          <li class="nav-item" *ngIf="isLoggedIn() | async">
            <a class="nav-link" (click)="logout()">Logout</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/flight-details">Flight Details</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      margin-bottom: 20px;
    }
    `]
})
export class NavbarComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  login() {
    if (!this.email || !this.password) {
      console.error('Email or password is missing.');
      return;
    }

    this.authService.login(this.email, this.password).then((result: any) => {
      console.log('Login successful', result);
      this.router.navigate(['/flight-details']);
    }).catch((error: any) => {
      console.error('Login failed:', error);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Logout successful');
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log('Logout failed:', error);
    });
  }
}
