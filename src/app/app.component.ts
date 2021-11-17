import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private geolocation: GeolocationService, private weatherService: WeatherService) { }

  async ngOnInit(): Promise<void> {
    await this.geolocation.getCurrentLocation().then((currentLocation) => {
      this.weatherService.setCurrentLocation(currentLocation)
    });
  }
}
