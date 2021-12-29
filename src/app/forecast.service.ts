import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Forecast } from './forecast';
//import { FORECASTS } from './mock-forecasts';


@Injectable({
  providedIn: 'root'
})

export class ForecastService
{
  private forecastsUrl = 'https://localhost:7013/WeatherForecast';  // URL to web api

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getForecasts(): Observable<Forecast[]>
  {
    //return this.http.get<Forecast[]>(this.forecastsUrl)

    return this.http.get<Forecast[]>(this.forecastsUrl)
    .pipe(
      tap(_ => this.log('fetched forecasts')),
      catchError(this.handleError<Forecast[]>('getForecasts', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ForecastService: ${message}`);
  }

}
