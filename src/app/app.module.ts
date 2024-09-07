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
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from '@firebase/app';

(window as any).firebase = firebase;

const firebaseConfig = {
  apiKey: "AIzaSyCvdTiyeiP5uT14k05VaulrDQo729mZPIc",
  authDomain: "flight-infos.firebaseapp.com",
  projectId: "flight-infos",
  storageBucket: "flight-infos.appspot.com",
  messagingSenderId: "890029276420",
  appId: "1:890029276420:web:1b4f3fa2d8d74fc45ba451",
  measurementId: "G-46J5V45WSQ"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
