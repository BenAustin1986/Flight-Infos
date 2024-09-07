import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    console.log('AuthGuard check under "export class AuthGuard"');
  }

  canActivate(): boolean {
    console.log('AuthGuard is running');
    return true;
  }

  // canActivate(): Observable<boolean> {
  //   console.log('AuthGuard under "canActivate"');

  //   return this.authService.isLoggedIn().pipe(
  //     take(1),
  //     map(isLoggedIn => {
  //       console.log('User logged in:', isLoggedIn);
  //       if (!isLoggedIn) {
  //         console.log('User not logged in, redirecting to login...');
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //       return true;
  //     }),
  //     catchError(() => {
  //       console.log('Error detected, redirecting to login...');
  //       this.router.navigate(['/login']);
  //       return of(false);
  //     })
  //   );
  // }
