import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit, OnDestroy {
  @HostBinding('class') class = "search";

  constructor(private weatherService: WeatherService) { }

  public subscription: Subscription = new Subscription;
  public currentCity: string = "";

  ngOnInit() {
    this.subscription = this.weatherService.currentLocation.subscribe((currentLocation) => {
      this.currentCity = currentLocation.city || currentLocation.name;
    })
  }

  setCurrentCity() {
    if (this.currentCity.length !== 0) {
      this.weatherService.setCurrentCity(this.currentCity);
      this.weatherService.getCityGeolocation(this.currentCity)
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
