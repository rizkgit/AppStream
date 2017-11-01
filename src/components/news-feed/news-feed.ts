import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the NewsFeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-feed',
  templateUrl: 'news-feed.html'
})
export class NewsFeedComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello NewsFeedComponent Component');
    this.text = 'Hello World';
  }

}
