import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [

    ],
    imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent, // Import AppComponent here as it is standalone
    LoginComponent, // Import LoginComponent here as it is standalone
    FlightDetailsComponent,
    CommonModule, // Import FlightDetailsComponent here if it is also standalone
    ],
    providers: [],
    bootstrap: [] // Bootstrap with the AppComponent
})
export class AppModule { }
