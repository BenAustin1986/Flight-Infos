import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment'; // Ensure this is correct

import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Initialize Firebase
    AngularFireAuthModule  // Firebase Authentication Module
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap with AppComponent
})
export class AppModule { }
