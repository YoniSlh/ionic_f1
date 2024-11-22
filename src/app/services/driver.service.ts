import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<any> {
    return this.http.get<any>('https://api.openf1.org/v1/drivers?session_key=9484');
  }
}
