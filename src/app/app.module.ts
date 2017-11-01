import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroComponent } from '../components/intro/intro';
import { LoginComponent } from '../components/login/login';
import { VideoStreamsComponent } from '../components/video-streams/video-streams';
import { MyMusicComponent } from '../components/my-music/my-music';
import { NewsFeedComponent } from '../components/news-feed/news-feed';
import { MyProfileComponent } from '../components/my-profile/my-profile';
import { HomeComponent } from '../components/home/home';
import { VimeoComponent } from '../components/vimeo/vimeo';
import { YoutubeComponent } from '../components/youtube/youtube';
import { SeelAllPopoverComponent } from '../components/seel-all-popover/seel-all-popover';

@NgModule({
  declarations: [
    MyApp,  
    IntroComponent,
    LoginComponent,
    HomeComponent,
    VideoStreamsComponent,
    MyMusicComponent,
    NewsFeedComponent,
    MyProfileComponent,
    VimeoComponent,
    YoutubeComponent,
    SeelAllPopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    IntroComponent,
    LoginComponent,
    HomeComponent,
    VideoStreamsComponent,
    MyMusicComponent,
    NewsFeedComponent,
    MyProfileComponent,
    VimeoComponent,
    YoutubeComponent,
    SeelAllPopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
