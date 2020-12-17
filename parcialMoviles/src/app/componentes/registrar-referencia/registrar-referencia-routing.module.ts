import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarReferenciaPage } from './registrar-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarReferenciaPageRoutingModule {}
