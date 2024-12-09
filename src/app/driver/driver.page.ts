import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {
  drivers: any[] = [];

  constructor(private driverService: DriverService, private router: Router) {}

  ngOnInit() {
    this.driverService.getDrivers().subscribe(
      (data) => {
        this.drivers = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    );
  }

  navigateToGestion() {
    this.router.navigate(['/gestion/liste']);
  }
}
