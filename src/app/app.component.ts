import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('User logged in:', user);
      } else {
        console.log('No user logged in');
      }
    });
  }
}
