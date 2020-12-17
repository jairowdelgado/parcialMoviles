import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarReferenciaPageRoutingModule } from './eliminar-referencia-routing.module';

import { EliminarReferenciaPage } from './eliminar-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarReferenciaPageRoutingModule
  ],
  declarations: [EliminarReferenciaPage]
})
export class EliminarReferenciaPageModule {}
