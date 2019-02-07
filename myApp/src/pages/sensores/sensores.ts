import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { PruebaPage } from '../prueba/prueba';
import { Info2Page } from '../info2/info2';
import { Prueba2Page } from '../prueba2/prueba2';
/**
 * Generated class for the SensoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensores',
  templateUrl: 'sensores.html',
})
export class SensoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  info1(){
    this.navCtrl.push(InfoPage );
  }
  prueba1(){
    this.navCtrl.push(PruebaPage );
  }
  info2(){
    this.navCtrl.push(Info2Page );
  }
  prueba2(){
    this.navCtrl.push(Prueba2Page );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SensoresPage');
  }
 
}
