import { Forecast } from './forecast';

export const FORECASTS: Forecast[] = [
  { date: new Date(2021, 12, 1), temperatureC: 123, temperatureF: 456, summary: "cold" },
  { date: new Date(2021, 12, 2), temperatureC: 13, temperatureF: 56, summary: "warm" },
  { date: new Date(2021, 12, 3), temperatureC: 23, temperatureF: 45, summary: "fine" },
  { date: new Date(2021, 12, 4), temperatureC: 12, temperatureF: 46, summary: "cool" },
  { date: new Date(2021, 12, 5), temperatureC: 3, temperatureF: 6, summary: "fuck" },
  { date: new Date(2021, 12, 6), temperatureC: 2, temperatureF: 5, summary: "monster" }
];