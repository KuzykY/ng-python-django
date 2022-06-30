import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constans/urls";
import {IAutopark} from "../models/autopark.interface";
import {ICar} from "../models/car.interface";

@Injectable({
  providedIn: 'root'
})
export class AutoparkService {

  constructor(private httpClient:HttpClient) { }

   getAll():Observable<IAutopark[]>{
    return this.httpClient.get<IAutopark[]>(urls.autopark)
  }
   getById(id: number): Observable<IAutopark> {
    return this.httpClient.get<IAutopark>(`${urls.autopark}/${id}`)
  }
    deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${urls.autopark}/${id}`)
  }
   getCarsById(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}?autoParkId=${id}`)
  }

}
