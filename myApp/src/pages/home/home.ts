import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SensoresPage } from '../sensores/sensores';
import { ContenedoresPage } from '../contenedores/contenedores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Sensor1(){
    this.navCtrl.push(SensoresPage);
  }

  Cont1(){
    this.navCtrl.push(ContenedoresPage);
  }
}
