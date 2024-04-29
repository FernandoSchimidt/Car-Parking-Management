import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiURL: string =
    'https://freeapi.miniprojectideas.com/api/ParkingSpotBooking/';

  constructor(private http: HttpClient) {}

  getAllParkingLots(): any {
    this.http.get(`${this.apiURL}/GetAllParkingLots`);
  }
}
