import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../service/song/song.service';
import {SingerInfo} from "../../../model/singer/singer-info";
import {SingerManagerService} from "../../../service/singerManager/singer-manager.service";
import {PlaylistService} from "../../../service/playlistManager/playlist.service";
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  info: any;
  listSongLike: Song[] = [];
  songList: Song[] = [];
  listenSong: Song[] = [];
  listSingers: SingerInfo[] = [];
  playlist: PlaylistInfor[] = [];

  constructor(
    private token: TokenStorageService,
    private songService: SongService,
    private playlistService: PlaylistService,
    private singerManagerService: SingerManagerService) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      avatar: this.token.getAvatar(),
      authorities: this.token.getAuthorities()
    };

    this.songService.getSong()
      .subscribe(next => {
        this.songList = next;
        console.log(next);
      }, error => {
        console.log(error);
      });

    this.songService.getLikeSong()
      .subscribe(next => {
        this.listSongLike = next;
        console.log(next);
      }, error => {
        console.log(error);
      });

    this.songService.getListenSong()
      .subscribe(next => {
        this.listenSong = next;
        console.log(next);
      }, error => {
        console.log(error);
      });

    this.singerManagerService.getSinger()
      .subscribe(next => {
        this.listSingers = next;
        console.log(next);
      }, error => {
        console.log(error);
      });

    this.playlistService.getPlayListAll()
      .subscribe(next => {
        this.playlist = next;
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  update(songs: Song[]) {
    this.songList = songs;
  }
}
