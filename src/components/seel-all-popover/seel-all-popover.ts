import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SeelAllPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'seel-all-popover',
  templateUrl: 'seel-all-popover.html'
})
export class SeelAllPopoverComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello SeelAllPopoverComponent Component');
    this.text = 'Hello World';
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
