import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { AutoparkComponent } from './components/autopark/autopark.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import { AutoparksComponent } from './components/autoparks/autoparks.component';
import { AutoparksdetailsComponent } from './components/autoparksdetails/autoparksdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarComponent,
    CarsComponent,
    AutoparkComponent,
    MainLayoutComponent,
    AutoparksComponent,
    AutoparksdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
