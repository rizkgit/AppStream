import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeComponent } from '../home/home';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

  proceedToHome(){
    this.navCtrl.push(HomeComponent);
  }

  
}
