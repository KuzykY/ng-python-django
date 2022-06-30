import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constans/urls";
import {ICar} from "../models/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars)
  }

  // getById(id: number): Observable<ICar> {
  //   return this.httpClient.get<ICar>(`${urls.cars}?autoParkId=${id}`)
  // }
}
