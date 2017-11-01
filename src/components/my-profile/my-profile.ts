import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MyProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfileComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello MyProfileComponent Component');
    this.text = 'Hello World';
  }

}
