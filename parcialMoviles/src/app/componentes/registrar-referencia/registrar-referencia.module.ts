import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarReferenciaPageRoutingModule } from './registrar-referencia-routing.module';

import { RegistrarReferenciaPage } from './registrar-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarReferenciaPageRoutingModule
  ],
  declarations: [RegistrarReferenciaPage]
})
export class RegistrarReferenciaPageModule {}
