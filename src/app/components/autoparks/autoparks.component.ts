import {Component, OnInit} from '@angular/core';
import {IAutopark} from "../../models/autopark.interface";
import {AutoparkService} from "../../services/autopark.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-autoparks',
  templateUrl: './autoparks.component.html',
  styleUrls: ['./autoparks.component.css']
})
export class AutoparksComponent implements OnInit {
  autoparks: IAutopark[]
  autopark: IAutopark

  constructor( private autoparkService:AutoparkService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.autoparkService.getAll().subscribe(value => this.autoparks=value)
  }

  delete(id: string) {
    this.autoparkService.deleteById(id).subscribe(() => {
      const index = this.autoparks.findIndex(autopark => autopark.id === id);
      this.autoparks.splice(index, 1)
    })
  }

  // showCars(id: string) {this.activatedRoute.params.subscribe(({id}) => {
  //     this.autoparkService.getCarsById('1').subscribe((autopark) => {
  //       this.autopark = autopark
  //     })
  //   })
  //
  // }
}
