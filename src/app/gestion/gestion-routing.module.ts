import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { ListePage } from './liste/liste.page';
import { CreationPage } from './creation/creation.page';
import { ModificationPage } from './modification/modification.page';

const routes: Routes = [
  {
    path: '',
    component: ListePage,
  },
  {
    path: 'creation',
    component: CreationPage,
  },
  {
    path: 'modification/:id',
    component: ModificationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPageRoutingModule {}
