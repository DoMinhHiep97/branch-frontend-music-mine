import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Song} from '../../../model/song/song';
import {Router} from '@angular/router';
import {SongService} from '../../../service/song/song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  title = 'Thêm Bài Hát Mới';

  songForm: FormGroup;
  song: Partial<Song>;

  constructor(private router: Router,
              private service: SongService) {
    this.songForm = new FormGroup({
      avatarUrl: new FormControl(''),
      category: new FormControl(''),
      nameSong: new FormControl(''),
      lyrics: new FormControl(''),
      singer: new FormControl(''),
      mp3Url: new FormControl(''),
      describes: new FormControl('')
    });
    this.song = {
      avatarUrl: '',
      nameSong: '',
      category: '',
      singer: '',
      lyrics: '',
      mp3Url: '',
      describes: ''
    };
  }

  ngOnInit() {
  }

  onChange($event) {
    this.song.mp3Url = $event;
  }

  onAvatar($event) {
    this.song.avatarUrl = $event;
  }

  createSong() {
    console.log(this.song);
    this.service.createSong(this.song).subscribe(() => {
        alert('Bạn đã thêm thành công Bài Hát');
        this.router.navigate(['/home']);
      }, error => {
        console.log(error),
          alert('Bạn chưa thêm thành công');
      }
    );
  }

}
