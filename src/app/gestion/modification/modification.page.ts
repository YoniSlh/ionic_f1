import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.page.html',
  styleUrls: ['./modification.page.scss'],
})
export class ModificationPage implements OnInit {
  driver: any = {
    first_name: '',
    last_name: '',
    team_name: '',
    driver_number: 0,
    headshot_url: '',
    team_colour: '',
    name_acronym: '',
    country_code: '',
    broadcast_name: '',
  };

  private driverId: string | null = null;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.driverId = this.route.snapshot.paramMap.get('id');
    if (this.driverId) {
      this.driverService.getDriverById(this.driverId).subscribe({
        next: (data) => {
          this.driver = { ...data };
        },
        error: (error) => {
          alert('Erreur lors du chargement des données');
          console.error(error);
        },
      });
    }
  }

  updateDriver() {
    if (this.driverId) {
      this.driverService.updateDriver(this.driverId, this.driver).subscribe({
        next: () => {
          alert('Mise à jour réussie');
          this.router.navigate(['/gestion/liste']);
        },
        error: (error) => {
          alert('Erreur lors de la mise à jour');
          console.error('Erreur:', error);
        },
      });
    } else {
      alert('ID inconnu, opération annulée');
    }
  }
}
