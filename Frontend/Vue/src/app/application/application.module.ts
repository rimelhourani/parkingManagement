import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { NewParkingComponent } from './new-parking/new-parking.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    NewParkingComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
   
    ReactiveFormsModule
   
  ]
})
export class ApplicationModule { }
