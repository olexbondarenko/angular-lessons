import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
import { CurrentWeather, ForecastWeather, Weather } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  constructor(private weatherService: WeatherService) { }

  public subscription: Subscription = new Subscription;
  public currentUnits: string = "";
  public currentCity: string = "";
  public currentWeather: CurrentWeather = {
    dt: 0,
    temp: 0,
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    wind_gust: 0,
    wind_speed: 0,
    sunrise: 0,
    sunset: 0,
    weather: {
      0: {
        icon: "",
        description: "",
        main: "",
      }
    }
  };
  public forecastWeather: any = [];
  public errorMessage: string = "";

  ngOnInit() {
    this.subscription = this.weatherService.currentLocation.subscribe((currentLocation) => {
      this.currentCity = currentLocation.city || currentLocation.name;
      this.weatherService.getCurrentWeather().subscribe(data => {
        this.currentWeather = data.current;
        this.forecastWeather = data.daily;
      })
    });

    this.subscription = this.weatherService.currentUnits.subscribe((units) => {
      this.currentUnits = units;
      this.weatherService.getCurrentWeather().subscribe(data => {
        this.currentWeather = data.current;
        this.forecastWeather = data.daily;
      })
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
