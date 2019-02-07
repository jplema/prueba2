import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info3Page } from '../info3/info3';
import { Info4Page } from '../info4/info4';
import { Prueba3Page } from '../prueba3/prueba3';
import { Prueba4Page } from '../prueba4/prueba4';
/**
 * Generated class for the ContenedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenedores',
  templateUrl: 'contenedores.html',
})
export class ContenedoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  info3(){
    this.navCtrl.push(Info3Page );
  }
  prueba3(){
    this.navCtrl.push(Prueba3Page );
  }
  info4(){
    this.navCtrl.push(Info4Page );
  }
  prueba4(){
    this.navCtrl.push(Prueba4Page );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenedoresPage');
  }

}
