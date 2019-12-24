import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";
import {PlaylistService} from "../../../service/playlistManager/playlist.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Subject} from "rxjs";
import {Song} from "../../../model/song/song";

import {AudioService} from "../../../service/audioService/audio.service";
import {max} from "rxjs/operators";
import {StreamState} from "../../../interfaces/stream-state";
// import {AudioStream, RxJSAudioService} from "rxjs-audio";



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  title = 'Danh Sách Bài Hát Trong PLaylist Của Tôi';
  songs: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  // audio: AudioStream;
  // error: boolean = false;
  // stateAudio: StreamState;
  // audioServiced: RxJSAudioService = new RxJSAudioService();
  @ViewChild('audioPlayer', { static: true }) audioPlayer: ElementRef;

  playlist: PlaylistInfor;
  constructor(private playlistService: PlaylistService, private audioService: AudioService,
              private routes: ActivatedRoute) {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.playlistService.getSongListOfPlaylist(id).subscribe(
        next => {
          this.songs = next;
          console.log(next);
        },
        error => {
          this.songs = null;
          console.log(error);
        }
      );
    });
    //listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
    // //creat stream
    // this.audio = this.audioServiced.create(this.songs, { urlKey: 'mp3Url', autoPlayNext: true});
    // //error handling
    // this.audio.events()
    //   .subscribe(event => {
    //     if (event.type === 'canplay') {
    //       this.error = false;
    //     } else if (event.type === 'error') {
    //       this.error = true;
    //       console.log(event);
    //     }
    //   });
    //
    // //update state
    // this.audio.getState()
    //   .subscribe( state => {
    //     this.state = state;
    //   });
  }
  playStream(url) {
    this.audioService.playStream(url)
      .subscribe(events => {
        // listening for fun here
      });
  }

  openFile(song, index) {
    this.currentFile = { index, song };
    this.audioService.stop();
    this.playStream(song.mp3Url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }
  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const song = this.songs[index];
    this.openFile(song, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const song = this.songs[index];
    this.openFile(song, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.songs.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.playlistService.getPlayListById(id).subscribe(
        next => {
          this.playlist = next;
          console.log(next);
        },
        error => {
          this.playlist = null;
          console.log(error);
        }
      );
    });

  }

//
//   play() {
//     this.audio.play();
//   }
//
//   pause() {
//     this.audio.pause();
//   }
//
//   next() {
//     this.audio.next();
//     this.audio.play();
//   }
//
//   previous() {
//     this.audio.previous();
//     this.audio.play();
//   }
//
//   playAt(index) {
//     this.audio.playAt(index);
//   }
//
//   onSliderChangeEnd(change) {
//     this.audio.seekTo(change.value);
//   }
}
