import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '../interfaces/geolocation';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {
  constructor(private http: HttpClient) { }

  async getCurrentLocation(): Promise<Geolocation> {
    let params = {
      fields: "city,regionName,lat,lon",
    }
    return await this.http.get<Geolocation>("http://ip-api.com/json/", { params }).toPromise().then(data => data);
  }
}
