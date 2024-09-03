import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'flight-details', component: FlightDetailsComponent },
    // { path: '**', component: 404Component },
];
