import {Component, Input, OnInit} from '@angular/core';
import {IAutopark} from "../../models/autopark.interface";

@Component({
  selector: 'app-autopark',
  templateUrl: './autopark.component.html',
  styleUrls: ['./autopark.component.css']
})
export class AutoparkComponent implements OnInit {
  @Input()
  autopark: IAutopark

  constructor() {
  }

  ngOnInit(): void {
  }

}
