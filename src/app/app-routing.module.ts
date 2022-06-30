import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CarsComponent} from "./components/cars/cars.component";
import {AutoparksComponent} from "./components/autoparks/autoparks.component";
import {AutoparksdetailsComponent} from "./components/autoparksdetails/autoparksdetails.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'cars', component: CarsComponent},
      {path: 'auto_parks', component: AutoparksComponent},
      {path: 'auto_parks/:id', component: AutoparksdetailsComponent},
      // {path: 'cars', component: CarsComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
