import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarEventoPage } from './adicionar-evento';

@NgModule({
  declarations: [
    AdicionarEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarEventoPage),
  ],
})
export class AdicionarEventoPageModule {}
