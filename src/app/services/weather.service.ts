import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) { }

  private headers = {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "2fab0a1b27mshc6f61e079cd67a9p160f9ejsnbb1506756435"
  }
  private api = {
    url: "https://community-open-weather-map.p.rapidapi.com",
    points: {
      current: "/weather",
      historical: "/onecall/timemachine"
    }
  }

  private currentWeather: any = { "coord": { "lon": 30.5167, "lat": 50.4333 }, "weather": [{ "id": 803, "main": "Clouds", "description": "облачно с прояснениями", "icon": "04d" }], "base": "stations", "main": { "temp": 10.03, "feelslike": 8.73, "tempmin": 9.05, "temp_max": 10.9, "pressure": 1007, "humidity": 63 }, "visibility": 10000, "wind": { "speed": 0.89, "deg": 155, "gust": 1.79 }, "clouds": { "all": 75 }, "dt": 1636367740, "sys": { "type": 2, "id": 2003742, "country": "UA", "sunrise": 1636347630, "sunset": 1636381375 }, "timezone": 7200, "id": 703448, "name": "Киев", "cod": 200 };

  // Get current weather data
  async getCurrentWeather(location: string) {
    const headers = this.headers;
    const params = {
      q: location,
      lang: "ru",
      units: "metric",
      mode: "JSON"
    }

    // this.http.get<any>(this.api.url + this.api.points.current, { headers, params }).subscribe(data => {
    //   this.currentWeather = data;
    //   console.log("Current Weather:", data)
    // })
    // console.log("Current Weather:", this.currentWeather)
  }


  // Get historical weather data
  async getHistoricalWeather(params: any): Promise<object> {
    const headers = this.headers;
    return await this.http.get<any>(this.api.url + this.api.points.historical, { headers, params }).toPromise()
  }
}
