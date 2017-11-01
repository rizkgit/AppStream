import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VimeoComponent } from '../vimeo/vimeo';
import { YoutubeComponent } from '../youtube/youtube';

/**
 * Generated class for the VideoStreamsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'video-streams',
  templateUrl: 'video-streams.html'
})
export class VideoStreamsComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello VideoStreamsComponent Component');
    this.text = 'Video Streams';
  }

  proceeToVimeo(){
    this.navCtrl.push(VimeoComponent);
  }

  proceeToYouTube(){
    this.navCtrl.push(YoutubeComponent);
  }
}
