import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorWeather, Weather } from '../core/weather/weather';
import { WeatherService } from '../core/weather/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  isLoading: boolean = false;
  weather: Weather;
  error: ErrorWeather;

  constructor(
    private weatherService: WeatherService
  ) {

  }

  ngOnInit() {
    this.isLoading = true;

    this.weatherService.getWeather(environment.defaultCity).subscribe(async (weather: Weather) => {
      this.weather = weather;
      console.log(this.weather);
      this.isLoading = false;
    }, async (err) => {
      this.error = err;
      this.isLoading = false;
    });

  }

}
