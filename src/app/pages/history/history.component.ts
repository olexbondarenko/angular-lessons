import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit, OnDestroy {
  constructor(private weatherService: WeatherService) { }

  public subscription: Subscription = new Subscription;
  public title: string = "History";
  public currentUnits: string = "";
  public historyDays: number = 5;
  public historicalWeather: Weather[] = [];

  ngOnInit() {
    this.subscription = this.weatherService.currentUnits.subscribe(async (units: string) => {
      this.currentUnits = units;
      this.historicalWeather = [];

      for (let day = 1; day <= this.historyDays; day++) {
        this.weatherService.getHistoricalWeather(day).subscribe(data => {
          this.historicalWeather.push(data);
        });
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
