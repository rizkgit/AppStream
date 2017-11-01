import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../login/login';

/**
 * Generated class for the IntroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'intro',
  templateUrl: 'intro.html'
})
export class IntroComponent {

  text: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello IntroComponent Component');
    this.text = 'Hello World';
  }

  proceedToLogin(){
    this.navCtrl.push(LoginComponent);
  }

}
