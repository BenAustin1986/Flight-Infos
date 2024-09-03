import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment'; // Ensure this is correct
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LoginComponent } from './login/login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

const routes: Routes = [
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
]

export const appConfig = {
  providers: [
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebaseConfig)),
    importProvidersFrom(AngularFireAuthModule),
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
};
