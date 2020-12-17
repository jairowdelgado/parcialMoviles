import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerReferenciaPageRoutingModule } from './ver-referencia-routing.module';

import { VerReferenciaPage } from './ver-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerReferenciaPageRoutingModule
  ],
  declarations: [VerReferenciaPage]
})
export class VerReferenciaPageModule {}
