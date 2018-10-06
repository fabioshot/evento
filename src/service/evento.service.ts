import { Injectable } from '@angular/core';
import { Evento } from '../model/evento';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class EventoService {

  itemsCollection: AngularFirestoreCollection<Evento> = this.afs.collection<Evento>('evento');

  constructor(private afs: AngularFirestore) { }
  getEventos() {
    return this.itemsCollection;
  }

  addEvento(evento: Evento) {
    const id = this.afs.createId();
    evento.key = id;
    this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(evento)));
  }

  updateEvento(evento: Evento) {
    return this.itemsCollection.doc(evento.key).update(evento);
  }

  removeEvento(evento: Evento) {
    return this.itemsCollection.doc(evento.key).delete();
  }


}
