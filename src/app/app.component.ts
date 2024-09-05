import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Flight Infos';
}
