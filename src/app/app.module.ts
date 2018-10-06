import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditarEventoPage } from '../pages/editar-evento/editar-evento';
import { MostrarEventoPage } from '../pages/mostrar-evento/mostrar-evento';
import { AdicionarEventoPage } from '../pages/adicionar-evento/adicionar-evento';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { EventoService } from '../service/evento.service';

const config = {
    apiKey: "AIzaSyA_LXiP3zg72XZOem0P7NiNhkg0XUU8yGg",
    authDomain: "evento-6769d.firebaseapp.com",
    databaseURL: "https://evento-6769d.firebaseio.com",
    projectId: "evento-6769d",
    storageBucket: "evento-6769d.appspot.com",
    messagingSenderId: "860737293067"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionarEventoPage,
    EditarEventoPage,
    MostrarEventoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionarEventoPage,
    EditarEventoPage,
    MostrarEventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventoService
  ]
})
export class AppModule {}
