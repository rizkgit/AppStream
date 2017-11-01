import { Component } from '@angular/core';

/**
 * Generated class for the VimeoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vimeo',
  templateUrl: 'vimeo.html'
})
export class VimeoComponent {

  text: string;

  constructor() {
    console.log('Hello VimeoComponent Component');
    this.text = 'Hello World';
  }

}
