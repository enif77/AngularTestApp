import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastsComponent,
    ForecastDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
