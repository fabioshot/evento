import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { Evento } from '../../model/evento';
import { EditarEventoPage } from '../editar-evento/editar-evento';
import { EventoService } from '../../service/evento.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


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
