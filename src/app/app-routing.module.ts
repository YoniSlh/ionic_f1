import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverPageModule),
  },
  {
    path: 'gestion/liste',
    loadChildren: () =>
      import('./gestion/liste/liste.module').then((m) => m.ListePageModule),
  },
  {
    path: 'gestion/creation',
    loadChildren: () =>
      import('./gestion/creation/creation.module').then(
        (m) => m.CreationPageModule
      ),
  },
  {
    path: 'gestion/modification/:id',
    loadChildren: () =>
      import('./gestion/modification/modification.module').then(
        (m) => m.ModificationPageModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
