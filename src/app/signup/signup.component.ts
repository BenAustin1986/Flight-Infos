import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule for ngModel to work
  template: `
    <div class="signup-container">
      <h2>Signup</h2>
      <form (ngSubmit)="signup()">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" [(ngModel)]="email" name="email" required class="form-control" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" required class="form-control" placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
      </form>
    </div>
  `
})
export class SignupComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (!this.email || !this.password) {
      console.error('Email or password is missing.');
      return;
    }

    this.authService.signup(this.email, this.password).then((result: any)) => {
      console.log('Signup successful', result);
      this.router.navigate(['/login']);
    }).catch((error: any) => {
      console.error('Signup failed:', error);
    });
  }
}
