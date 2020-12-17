import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarReferenciaPage } from './editar-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: EditarReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarReferenciaPageRoutingModule {}
