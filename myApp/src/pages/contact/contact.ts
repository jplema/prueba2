import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
import { Masinfo1Page } from '../masinfo1/masinfo1';
import { Masinfo2Page } from '../masinfo2/masinfo2';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  constructor(public navCtrl: NavController) {
    
  }
  
  masinfo(){
    this.navCtrl.push( MasinfoPage );
  }
  masinfo1(){
    this.navCtrl.push( Masinfo1Page );
  }
  masinfo2(){
    this.navCtrl.push( Masinfo2Page );
  }
}
