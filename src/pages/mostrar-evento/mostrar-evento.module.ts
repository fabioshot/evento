import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarEventoPage } from './mostrar-evento';

@NgModule({
  declarations: [
    MostrarEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarEventoPage),
  ],
})
export class MostrarEventoPageModule {}
