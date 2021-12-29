import { Component, OnInit } from '@angular/core';

import { Forecast } from '../forecast';
//import { FORECASTS } from '../mock-forecasts';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})

export class ForecastsComponent implements OnInit
{
  forecasts: Forecast[] = [];
  selectedForecast?: Forecast;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getForecasts();
  }

  onSelect(forecast: Forecast): void {
    this.selectedForecast = forecast;
  }

  getForecasts(): void {
    this.forecastService.getForecasts()
        .subscribe(forecasts => this.forecasts = forecasts);
  }

}
