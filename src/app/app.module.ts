import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/userManager/login/login.component';
import {RegisterComponent} from './component/userManager/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './service/userManager/auth/auth-interceptor';
import {ContentComponent} from './component/layout/content/content.component';
import {HeaderComponent} from './component/layout/header/header.component';
import {UserComponent} from './component/userManager/user/user.component';

import { UploadFileComponent } from './component/upload/upload-file/upload-file.component';
import { CreateSongComponent } from './component/songManager/create-song/create-song.component';
import { UploadAvatarComponent } from './component/upload/upload-avatar/upload-avatar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { CarouselComponent } from './component/layout/carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ListSongComponent } from './component/songManager/list-song/list-song.component';
import { AboutUsComponent } from './component/layout/about-us/about-us.component';
import {DetailSongComponent} from './component/songManager/detail-song/detail-song.component';
import { CreatePlaylistComponent } from './component/playlistManager/create-playlist/create-playlist.component';
import { ListPlaylistComponent } from './component/playlistManager/list-playlist/list-playlist.component';
import { PlaylistComponent } from './component/playlistManager/playlist/playlist.component';
import { MenuLeftComponent } from './component/layout/menu-left/menu-left.component';
import {DashboardComponent} from './component/userManager/dashboard/dashboard.component';
import { UpdateInforComponent } from './component/userManager/update-infor/update-infor.component';
import { ChangePassComponent } from './component/userManager/change-pass/change-pass.component';
import { SearchComponent } from './component/layout/search/search.component';
import { AllListSongComponent } from './component/songManager/all-list-song/all-list-song.component';
import { UpdatePlaylistComponent } from './component/playlistManager/update-playlist/update-playlist.component';
import { AddsongComponent } from './component/playlistManager/addsong/addsong.component';
import { TitlePageComponent } from './component/layout/title-page/title-page.component';
import {AuthGuard} from './service/userManager/guard/auth.guard';
import {AuthService} from './service/userManager/auth/auth.service';
import { NotGuardComponent } from './component/layout/not-guard/not-guard.component';
import { ListSingerComponent } from './component/singerManager/list-singer/list-singer.component';
import { DetailSingerComponent } from './component/singerManager/detail-singer/detail-singer.component';
import { CreateSingerComponent } from './component/singerManager/create-singer/create-singer.component';
import { CarouselListSingerComponent } from './component/singerManager/carousel-list-singer/carousel-list-singer.component';
import { ListSingerUserComponent } from './component/singerManager/list-singer-user/list-singer-user.component';
import { SingeraddsongComponent } from './component/singerManager/singeraddsong/singeraddsong.component';
import { UpdatesingerComponent } from './component/singerManager/updatesinger/updatesinger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FormatTimePipe} from './format-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent,
    HeaderComponent,
    UserComponent,
    UploadFileComponent,
    CreateSongComponent,
    UploadAvatarComponent,
    FooterComponent,
    DetailSongComponent,
    CarouselComponent,
    ListSongComponent,
    AboutUsComponent,
    CreatePlaylistComponent,
    ListPlaylistComponent,
    PlaylistComponent,
    MenuLeftComponent,
    TitlePageComponent,
    DashboardComponent,
    UpdateInforComponent,
    ChangePassComponent,
    SearchComponent,
    AllListSongComponent,
    UpdatePlaylistComponent,
    AddsongComponent,
    NotGuardComponent,
    ListSingerComponent,
    DetailSingerComponent,
    CreateSingerComponent,
    CarouselListSingerComponent,
    ListSingerUserComponent,
    SingeraddsongComponent,
    UpdatesingerComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFontAwesomeModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [httpInterceptorProviders, AuthGuard, AuthService, FormatTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
