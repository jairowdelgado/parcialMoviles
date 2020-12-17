import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerReferenciaPage } from './ver-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: VerReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerReferenciaPageRoutingModule {}
