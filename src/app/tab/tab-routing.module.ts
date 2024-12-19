import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'drivers',
        loadChildren: () =>
          import('../driver/driver.module').then((m) => m.DriverPageModule),
      },
      {
        path: 'gestion/liste',
        loadChildren: () =>
          import('../gestion/liste/liste.module').then(
            (m) => m.ListePageModule
          ),
      },
      {
        path: 'gestion/creation',
        loadChildren: () =>
          import('../gestion/creation/creation.module').then(
            (m) => m.CreationPageModule
          ),
      },
      {
        path: 'gestion/modification/:id',
        loadChildren: () =>
          import('../gestion/modification/modification.module').then(
            (m) => m.ModificationPageModule
          ),
      },
      {
        path: 'camera',
        loadChildren: () =>
          import('../camera/camera.module').then((m) => m.CameraPageModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
