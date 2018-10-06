import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { Evento } from '../../model/evento';
import { EventoService } from '../../service/evento.service';


@IonicPage()
@Component({
  selector: 'page-adicionar-evento',
  templateUrl: 'adicionar-evento.html',
})
export class AdicionarEventoPage {

  private evento: Evento = new Evento();

  constructor(public navCtrl: NavController, private eventoService: EventoService) {}

  cadastrarEvento() {
    this.eventoService.addEvento(this.evento);
    this.navCtrl.pop();
  }


}
