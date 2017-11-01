import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { SeelAllPopoverComponent } from '../seel-all-popover/seel-all-popover';

/**
 * Generated class for the MyMusicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-music',
  templateUrl: 'my-music.html'
})
export class MyMusicComponent {

  text: string;

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {
    console.log('Hello MyMusicComponent Component');
    this.text = 'Hello World';
  }

  seeAll(myEvent){
    let popover = this.popoverCtrl.create(SeelAllPopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

}
