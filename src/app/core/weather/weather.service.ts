import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getWeather(city: string) {
    const reqUrl = `${environment.api}?key=${environment.key}&q=${city}&aqi=no`;
    return this.httpClient.get(reqUrl)
  }
}
