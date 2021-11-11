import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  public sessionHistoricalWeather: any = sessionStorage.getItem('historicalWeather');
  public historicalWeather: any = this.sessionHistoricalWeather ? JSON.parse(this.sessionHistoricalWeather) : []

  ngOnInit() {
    if (sessionStorage.getItem("historicalWeather") === null) {
      this.getHistory();
    }
  }

  getTimestamp(daysBefore: number): number {
    let date: Date = new Date();
    date.setDate(date.getDate() - daysBefore);
    return Date.parse(date.toString()) / 1000;
  }

  async getHistory() {
    let historyDays = 5;
    let history = null;

    for (let day = 1; day <= historyDays; day++) {
      history = await this.weatherService.getHistoricalWeather({
        lat: '50.4333',
        lon: '30.5167',
        units: "metric",
        dt: this.getTimestamp(day)
      });
      this.historicalWeather.push(history);
    }
    sessionStorage.setItem("historicalWeather", JSON.stringify(this.historicalWeather));
  }

}
