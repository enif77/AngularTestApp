import { Component, OnInit, Input } from '@angular/core';

import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.css']
})
export class ForecastDetailComponent implements OnInit {

  @Input() forecast?: Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}
