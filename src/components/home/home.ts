import { Component } from '@angular/core';
import { VideoStreamsComponent } from '../video-streams/video-streams';
import { MyMusicComponent } from '../my-music/my-music';
import { MyProfileComponent } from '../my-profile/my-profile';
import { NewsFeedComponent } from '../news-feed/news-feed';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  tab1Root = VideoStreamsComponent;
  tab2Root = MyMusicComponent;
  tab3Root = NewsFeedComponent;
  tab4Root = MyProfileComponent;
 

  constructor() {
   
  }

}
