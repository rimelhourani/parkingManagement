import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from './parking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  Api_url = "http://localhost:5000/api";

  constructor(private http : HttpClient) { }
  addParking(data:Parking):Observable<string>{
    console.log('data',data);
    
    return this.http.post<string>(`${this.Api_url}/parking`,data)

  }
}
