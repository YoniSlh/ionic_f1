import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  drivers: any[] = [];

  constructor(public router: Router, private driverService: DriverService) {}

  ngOnInit() {
    this.driverService.getDrivers().subscribe((data) => {
      this.drivers = data.map((driver: any) => {
        return { ...driver, id: driver.id }; // ajoute l'id au pilote
      });
    });
  }

  deleteDriver(driver: any) {
    this.driverService.deleteDriver(driver.id).subscribe({
      next: () => {
        alert('Suppression réussie');
        this.driverService.getDrivers().subscribe((data) => {
          this.drivers = data.map((d: any) => ({ ...d, id: d.id })); // met à jour la liste après suppression
        });
      },
      error: (error) => {
        alert('Erreur lors de la suppression');
        console.error('Erreur lors de la suppression :', error);
      },
    });
  }

  goToModification(driver: any) {
    this.router.navigate(['/gestion/modification', driver.id]); // redirige vers la page de modification
  }
}
