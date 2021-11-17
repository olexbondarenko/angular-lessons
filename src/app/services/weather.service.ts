import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';
import { Units } from '../interfaces/units';
import { Geolocation } from '../interfaces/geolocation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) { }

  private api = {
    key: environment.apiKey,
    url: "https://api.openweathermap.org/data/2.5",
    urlGeo: "http://api.openweathermap.org/geo/1.0",
    points: {
      current: "/onecall",
      historical: "/onecall/timemachine",
      geo: "/direct"
    }
  }

  public currentUnits: BehaviorSubject<string> = new BehaviorSubject("metric");
  public units: BehaviorSubject<Units[]> = new BehaviorSubject([
    {
      name: "metric",
      icon: "celsius",
      isActive: true
    },
    {
      name: "imperial",
      icon: "fahrenheit",
      isActive: false
    }
  ]);

  public currentCity: BehaviorSubject<string> = new BehaviorSubject("");
  public currentLocation: BehaviorSubject<Geolocation> = new BehaviorSubject<Geolocation>({
    lat: 0,
    lon: 0,
    city: "",
    name: "",
    regionName: "",
  });


  // Changes active units also set current
  setUnit(units: any, currentUnits: string): void {
    this.units.next(units);
    this.currentUnits.next(currentUnits);
  }

  // Set current location
  setCurrentLocation(currentLocation: Geolocation): void {
    this.currentLocation.next(currentLocation);
    this.currentCity.next(currentLocation.city);
    this.currentCity.next(currentLocation.name);
  }

  // Set city name
  setCurrentCity(currentCity: string): void {
    this.currentCity.next(currentCity)
  }

  // Returns timestamp from current date
  getTimestamp(daysBefore: number): number {
    let date: Date = new Date();
    date.setDate(date.getDate() - daysBefore);
    return Date.parse(date.toString()) / 1000;
  }

  // Get coordinates by city name
  getCityGeolocation(currentCity: string) {
    let params = {
      q: currentCity,
      appid: this.api.key,
    }
    this.http.get<Geolocation[]>(this.api.urlGeo + this.api.points.geo, { params }).subscribe((city) => {
      this.setCurrentLocation(city[0]);
    })
  }

  // Gets current weather data and also for 5 next days
  getCurrentWeather(): Observable<Weather> {
    let params = {
      lat: this.currentLocation.getValue().lat,
      lon: this.currentLocation.getValue().lon,
      exclude: "minutely,hourly,alerts",
      units: this.currentUnits.getValue(),
      appid: this.api.key,
    };
    return this.http.get<Weather>(this.api.url + this.api.points.current, { params });
  }

  // Gets historical weather data for 5 previous days
  getHistoricalWeather(day: number): Observable<Weather> {
    let params = {
      lat: this.currentLocation.getValue().lat,
      lon: this.currentLocation.getValue().lon,
      units: this.currentUnits.getValue(),
      appid: this.api.key,
      dt: this.getTimestamp(day),
    };
    return this.http.get<Weather>(this.api.url + this.api.points.historical, { params });
  }
}