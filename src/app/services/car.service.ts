import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../modules/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44369/api/cars/getcardetails';

  constructor(private httpClient : HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
