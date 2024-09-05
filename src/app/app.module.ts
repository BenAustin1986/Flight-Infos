import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvdTiyeiP5uT14k05VaulrDQo729mZPIc",
  authDomain: "flight-infos.firebaseapp.com",
  projectId: "flight-infos",
  storageBucket: "flight-infos.appspot.com",
  messagingSenderId: "890029276420",
  appId: "1:890029276420:web:1b4f3fa2d8d74fc45ba451",
  measurementId: "G-46J5V45WSQ"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AppComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
