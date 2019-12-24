import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song/song";
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";
import {SongService} from "../../../service/song/song.service";
import {PlaylistService} from "../../../service/playlistManager/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SingerInfo} from "../../../model/singer/singer-info";
import {SingerManagerService} from "../../../service/singerManager/singer-manager.service";

@Component({
  selector: 'app-singeraddsong',
  templateUrl: './singeraddsong.component.html',
  styleUrls: ['./singeraddsong.component.scss']
})
export class SingeraddsongComponent implements OnInit {

  songList: Song[] = [];
  singer: SingerInfo;
  id: number;
  title: 'Mời Bạn Chọn Bài Hát';

  constructor(private songService: SongService,
              private singerManagerService: SingerManagerService,
              private routes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.routes.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.singerManagerService.getSingerById(this.id).subscribe(
        data => {
          this.singer = data;
        },
        error => {
          this.singer = null;
        }
      );
    });

    this.songService.getSong()
      .subscribe(next => {
        this.songList = next;
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  update(songs: Song[]) {
    this.songList = songs;
  }

  addSongtoPlayList(song: Song) {
    this.singer.songs.push(song);
    const url = '/detail-singer/' + this.id;
    this.singerManagerService.updateSinger(this.singer).subscribe(next => {
      this.router.navigate([url]);
    });
  }

}
