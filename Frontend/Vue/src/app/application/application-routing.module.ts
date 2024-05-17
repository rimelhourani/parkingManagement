import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewParkingComponent } from './new-parking/new-parking.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'parking',component:NewParkingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
