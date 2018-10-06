import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


import { Evento } from '../../model/evento';
import { EditarEventoPage } from '../editar-evento/editar-evento';
import { EventoService } from '../../service/evento.service';


import { AdicionarEventoPage } from '../adicionar-evento/adicionar-evento';
import { MostrarEventoPage } from '../mostrar-evento/mostrar-evento';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private evento: Evento = new Evento();

  items: Observable<Evento[]>

  constructor(public navCtrl: NavController, private eventoService: EventoService,public actionSheetCtrl: ActionSheetController) {
    this.items = this.eventoService.getEventos().valueChanges();
  }

  chamarAdicionarEvento(){
    this.navCtrl.push(AdicionarEventoPage)
  }

  removerEvento(evento: Evento) {
    this.eventoService.removeEvento(evento);

  }

  abrirOpcao(event) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha a Opcão',
      buttons: [
        {
          text: 'Editar Evento',
          handler: () => {this.navCtrl.push(EditarEventoPage, {event})}
        },
        {
          text: 'Mostrar Evento',
          handler: () => {this.navCtrl.push(MostrarEventoPage, {event})}
        },
        {
          text: 'Excluir Evento',
          handler: () => {this.removerEvento(event)}
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {console.log('Cancel clicked');}
        }
      ]
    });
    actionSheet.present();
  }

}
