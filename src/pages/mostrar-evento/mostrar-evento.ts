import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Evento } from '../../model/evento';
import { EventoService } from '../../service/evento.service';

/**
* Generated class for the MostrarEventoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-mostrar-evento',
  templateUrl: 'mostrar-evento.html',
})
export class MostrarEventoPage {

  private evento: Evento = new Evento();

  constructor(public navCtrl: NavController, public navParams: NavParams,  public eventoService: EventoService) {
    this.evento = this.navParams.get("event");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarEventoPage');
  }

  fecharEvento(){
    this.navCtrl.pop();
  }

}
