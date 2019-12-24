import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './component/userManager/register/register.component';
import {LoginComponent} from './component/userManager/login/login.component';
import {ContentComponent} from './component/layout/content/content.component';
import {UserComponent} from './component/userManager/user/user.component';
import {CreateSongComponent} from './component/songManager/create-song/create-song.component';
import {DetailSongComponent} from './component/songManager/detail-song/detail-song.component';
import {ListSongComponent} from './component/songManager/list-song/list-song.component';
import {AboutUsComponent} from './component/layout/about-us/about-us.component';
import {CreatePlaylistComponent} from './component/playlistManager/create-playlist/create-playlist.component';
import {PlaylistComponent} from './component/playlistManager/playlist/playlist.component';
import {ListPlaylistComponent} from './component/playlistManager/list-playlist/list-playlist.component';
import {MenuLeftComponent} from './component/layout/menu-left/menu-left.component';
import {DashboardComponent} from './component/userManager/dashboard/dashboard.component';
import {UpdateInforComponent} from "./component/userManager/update-infor/update-infor.component";
import {ChangePassComponent} from "./component/userManager/change-pass/change-pass.component";
import {UpdatePlaylistComponent} from "./component/playlistManager/update-playlist/update-playlist.component";
import {AddsongComponent} from "./component/playlistManager/addsong/addsong.component";
import {AuthGuard} from "./service/userManager/guard/auth.guard";
import {CreateSingerComponent} from "./component/singerManager/create-singer/create-singer.component";
import {DetailSingerComponent} from "./component/singerManager/detail-singer/detail-singer.component";
import {ListSingerComponent} from "./component/singerManager/list-singer/list-singer.component";
import {NotGuardComponent} from "./component/layout/not-guard/not-guard.component";
import {ListSingerUserComponent} from "./component/singerManager/list-singer-user/list-singer-user.component";
import {SingeraddsongComponent} from "./component/singerManager/singeraddsong/singeraddsong.component";
import {UpdatesingerComponent} from "./component/singerManager/updatesinger/updatesinger.component";



const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'my-profile', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'auth/login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home/song/play/:id', component: DetailSongComponent},
  {path: 'create-song', component: CreateSongComponent, canActivate: [AuthGuard]},
  {path: 'list-song', component: ListSongComponent, canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'create-playlist', component: CreatePlaylistComponent, canActivate: [AuthGuard]},
  {path: 'list-playlist', component: ListPlaylistComponent},
  {path: 'my-playlist/:id', component: PlaylistComponent},
  {path: 'update-playlist/:id', component: UpdatePlaylistComponent, canActivate: [AuthGuard]},
  {path: 'menu-left', component: MenuLeftComponent},
  {path: 'auth/dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'auth/updateuser', component: UpdateInforComponent , canActivate: [AuthGuard]},
  {path: 'auth/changepass', component: ChangePassComponent, canActivate: [AuthGuard]},
  {path: 'add-song/:id', component: AddsongComponent , canActivate: [AuthGuard]},
  {path: 'add-song-singer/:id', component: SingeraddsongComponent , canActivate: [AuthGuard]},
  {path: 'update-singer/:id', component: UpdatesingerComponent , canActivate: [AuthGuard]},
  {path: 'list-singer-users', component: ListSingerUserComponent, canActivate: [AuthGuard]},
  // {path: 'search/{nameSong}', component: SearchComponent},
  {path: 'create-playlist', component: CreatePlaylistComponent, canActivate: [AuthGuard]},
  {path: 'list-playlist', component: ListPlaylistComponent, canActivate: [AuthGuard]},
  {path: 'my-playlist/:id', component: PlaylistComponent, canActivate: [AuthGuard]},
  {path: 'menu-left', component: MenuLeftComponent, canActivate: [AuthGuard]},
  {path: 'auth/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'auth/updateuser', component: UpdateInforComponent, canActivate: [AuthGuard]},
  {path: 'auth/changepass', component: ChangePassComponent, canActivate: [AuthGuard]},
  {path: 'create-singer', component: CreateSingerComponent, canActivate: [AuthGuard]},
  {path: 'detail-singer/:id', component: DetailSingerComponent},
  {path: 'list-singer', component: ListSingerComponent},
  {path: 'error404', component: NotGuardComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
