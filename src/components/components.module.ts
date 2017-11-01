import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { VideoStreamsComponent } from './video-streams/video-streams';
import { MyMusicComponent } from './my-music/my-music';
import { NewsFeedComponent } from './news-feed/news-feed';
import { MyProfileComponent } from './my-profile/my-profile';
import { VimeoComponent } from './vimeo/vimeo';
import { YoutubeComponent } from './youtube/youtube';
import { SeelAllPopoverComponent } from './seel-all-popover/seel-all-popover';
@NgModule({
	declarations: [IntroComponent,
    LoginComponent,
    HomeComponent,
    VideoStreamsComponent,
    MyMusicComponent,
    NewsFeedComponent,
    MyProfileComponent,
    VimeoComponent,
    YoutubeComponent,
    SeelAllPopoverComponent],
	imports: [],
	exports: [IntroComponent,
    LoginComponent,
    HomeComponent,
    VideoStreamsComponent,
    MyMusicComponent,
    NewsFeedComponent,
    MyProfileComponent,
    VimeoComponent,
    YoutubeComponent,
    SeelAllPopoverComponent]
})
export class ComponentsModule {}
