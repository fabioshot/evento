import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Evento } from '../../model/evento';
import { EventoService } from '../../service/evento.service';

@IonicPage()
@Component({
  selector: 'page-editar-evento',
  templateUrl: 'editar-evento.html',
})
export class EditarEventoPage {

  private evento: Evento = new Evento();

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventoService: EventoService) {
    this.evento = this.navParams.get("event");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarEventoPage');
  }

  alterarEvento() {
    this.eventoService.updateEvento(this.evento);
    this.navCtrl.pop();
  }

}
