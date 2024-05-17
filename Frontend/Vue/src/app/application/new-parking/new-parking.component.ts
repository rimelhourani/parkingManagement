import { Component } from '@angular/core';
import { Parking } from '../parking';
import { FormControl, FormGroup } from '@angular/forms';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrl: './new-parking.component.css'
})
export class NewParkingComponent {
  parking: Parking = {
    id: '',
    name: '',
    adresse: '',
    capacite: '',
    ParkingRate: 0,
    telephone: '',
    timeStart: '',
    timeFinish: '',
    user: { name: '', email: '' }
  }
  msg!: string;
  parkingForm = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(),
    capacite: new FormControl(),
    ParkingRate: new FormControl(),
    adresse: new FormControl(),
    telephone: new FormControl(),
    timeStart: new FormControl(),
    timeFinish: new FormControl(),
    user: new FormControl(),
  });
  constructor(private _serviceParking: ParkingService) { }
  AjouterParking() {
    this.parking.name = this.parkingForm.value.name;
    this.parking.capacite = this.parkingForm.value.capacite;
    this.parking.adresse = this.parkingForm.value.adresse;
    this.parking.ParkingRate = this.parkingForm.value.ParkingRate;
    this.parking.telephone = this.parkingForm.value.telephone;
    this.parking.timeStart = this.parkingForm.value.timeStart;
    this.parking.timeFinish = this.parkingForm.value.timeFinish;
    this.parking.user = this.parkingForm.value.user;

    console.log('se', this.parking);
    this._serviceParking.addParking(this.parking).subscribe({
      next: (n) => {
        this.msg = n;
      },
      error: (e) => {
        console.log(e.error);
      },
      complete: () => {
        console.log('parking ajouter');
      },
    });
}
}
