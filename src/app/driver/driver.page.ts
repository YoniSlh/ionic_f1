import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {
  drivers: any[] = [];

  constructor(private driverService: DriverService) {}

  ngOnInit() {
    this.driverService.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }
}
