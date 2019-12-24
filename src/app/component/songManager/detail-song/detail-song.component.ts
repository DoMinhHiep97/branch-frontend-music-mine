import {Component, OnInit} from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../service/song/song.service';
import {ActivatedRoute, Route} from '@angular/router';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.scss']
})

export class DetailSongComponent implements OnInit {
  title = 'Chi Tiết Bài Hát';
  song: Song;
  songInfor: Song[] = [];
  likeCounter = 0;

  constructor(private token: TokenStorageService,
              private songService: SongService,
              private routes: ActivatedRoute,
              config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    // this.songService.getSong().subscribe(
    //   next => {
    //     this.songInfor = next;
    //   },
    //   error => {
    //     this.songInfor = [];
    //   },
    // );

    this.routes.paramMap.subscribe( paramMap => {
      const id = +paramMap.get('id');
      this.songService.getSongById(id).subscribe(
        next => {
          this.song = next;
          console.log(next);
          console.log(this.song);
          console.log(this.song.mp3Url);
        },
        error => {
          this.song = null;
          console.log(error);
        }
      );
    });
  }

  likeCount(id: number) {
    this.likeCounter++;
    if (this.likeCounter === 1) {
      this.songService
        .getLikeSongById(id)
        .subscribe(
          data => {
            this.song = data;
          },
          error => {
            this.song = null;
          }
        );
    }
  }

  open(content) {
    this.modalService.open(content);
  }
}
