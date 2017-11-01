import { Component } from '@angular/core';

/**
 * Generated class for the YoutubeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'youtube',
  templateUrl: 'youtube.html'
})
export class YoutubeComponent {

  text: string;

  constructor() {
    console.log('Hello YoutubeComponent Component');
    this.text = 'Hello World';
  }

}
