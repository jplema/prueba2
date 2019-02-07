import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContenedoresPage } from './contenedores';

@NgModule({
  declarations: [
    ContenedoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ContenedoresPage),
  ],
})
export class ContenedoresPageModule {}
