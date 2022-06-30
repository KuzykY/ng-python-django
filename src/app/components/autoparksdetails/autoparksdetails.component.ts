import {Component, OnInit} from '@angular/core';
import {IAutopark} from "../../models/autopark.interface";
import {AutoparkService} from "../../services/autopark.service";
import {ActivatedRoute} from "@angular/router";
import {ICar} from "../../models/car.interface";

@Component({
  selector: 'app-autoparksdetails',
  templateUrl: './autoparksdetails.component.html',
  styleUrls: ['./autoparksdetails.component.css']
})
export class AutoparksdetailsComponent implements OnInit {
  autopark: IAutopark
  cars:ICar[]

  constructor(private autoparkService: AutoparkService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.autoparkService.getById(id).subscribe((autopark) => {
        this.autopark = autopark
      })
    })
  }

  showCars(id: string) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.autoparkService.getCarsById(id).subscribe((cars) => {
        this.cars = cars
      })
    })

  }
}
