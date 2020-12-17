import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarReferenciaPageRoutingModule } from './editar-referencia-routing.module';

import { EditarReferenciaPage } from './editar-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarReferenciaPageRoutingModule
  ],
  declarations: [EditarReferenciaPage]
})
export class EditarReferenciaPageModule {}
