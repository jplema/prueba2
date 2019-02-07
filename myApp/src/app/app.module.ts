import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SensoresPage } from '../pages/sensores/sensores';
import { MasinfoPage } from '../pages/masinfo/masinfo';
import { Masinfo1Page } from '../pages/masinfo1/masinfo1';
import { Masinfo2Page } from '../pages/masinfo2/masinfo2';
import { InfoPage } from '../pages/info/info';
import { PruebaPage } from '../pages/prueba/prueba';
import { Info2Page } from '../pages/info2/info2';
import { Prueba2Page } from '../pages/prueba2/prueba2';
import { Info3Page } from '../pages/info3/info3';
import { Info4Page } from '../pages/info4/info4';
import { Prueba3Page } from '../pages/prueba3/prueba3';
import { Prueba4Page } from '../pages/prueba4/prueba4';
import  {ContenedoresPage } from '../pages/contenedores/contenedores';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SensoresPage,
    MasinfoPage,
    InfoPage,
    PruebaPage,
    Info2Page,
    Prueba2Page,
    ContenedoresPage,
    Info3Page,
    Info4Page,
    Prueba3Page,
    Prueba4Page,
    Masinfo1Page,
    Masinfo2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SensoresPage,
    MasinfoPage,
    InfoPage,
    PruebaPage,
    Info2Page,
    Prueba2Page,
    ContenedoresPage,
    Info3Page,
    Info4Page,
    Prueba3Page,
    Prueba4Page,
    Masinfo1Page,
    Masinfo2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
