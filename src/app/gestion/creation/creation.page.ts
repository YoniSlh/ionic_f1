import { Component } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage {
  newDriver = {
    first_name: '',
    last_name: '',
    team_name: '',
    driver_number: '',
    headshot_url: '',
    team_colour: '',
    name_acronym: '',
    country_code: '',
    broadcast_name: '',
    id: 0,
  };

  constructor(private driverService: DriverService, private router: Router) {}

  submitDriver() {
    this.driverService.getLastDriverId().subscribe({
      next: (lastId: number) => {
        this.newDriver.id = lastId + 1; // attribue un nouvel ID basé sur le dernier
        this.driverService.createDriver(this.newDriver).subscribe({
          next: () => {
            alert('Driver créé avec succès');
            this.router.navigate(['/gestion/liste']);
          },
          error: (error: any) => {
            alert('Erreur lors de la création');
            console.error('Erreur:', error);
          },
        });
      },
      error: (error: any) => {
        alert("Erreur lors de la récupération de l'ID");
        console.error('Erreur:', error);
      },
    });
  }
}
