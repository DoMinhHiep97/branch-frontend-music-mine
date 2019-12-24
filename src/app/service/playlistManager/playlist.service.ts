import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {PlaylistInfor} from '../../model/playlist/playlist-Infor';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Song} from "../../model/song/song";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistUrl = 'http://localhost:8080/api/playlist';
  private playlistUpdate = 'http://localhost:8080/api/playlist/update';
  private addSong1 = 'http://localhost:8080/api/playlist/addSong';
  private readonly API_URL_CREATE = environment.URL + '/api/playlist/create';
  private playlistByUser = 'http://localhost:8080/api/auth/playListByUser';
  private songsOfPlaylist = 'http://localhost:8080/api/playlist/songs';
  constructor(
    private http: HttpClient) {
  }

  // METHOD CHO BACKEND
  createPlaylist(playlist: Partial<PlaylistInfor>): Observable<any> {
    return this.http.post<any>(this.API_URL_CREATE, playlist);
  }

  getPlayListAll(): Observable<PlaylistInfor[]> {
    return this.http.get<PlaylistInfor[]>(this.playlistUrl);
  }

  getPlayListById(id: number): Observable<PlaylistInfor> {
    return this.http.get<PlaylistInfor>(`${this.playlistUrl}/${id}`);
  }

  getSongListOfPlaylist(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.songsOfPlaylist}/${id}`);
  }

  updatePlayList(playlist: PlaylistInfor): Observable<any> {
    return this.http.put<any>(`${this.playlistUpdate}/${playlist.id}`, playlist);
  }

  addSong(playlist: PlaylistInfor): Observable<any> {
    return this.http.put<any>(`${this.addSong1}/${playlist.id}`, playlist);
  }

  deletePlayList(id: number): Observable<PlaylistInfor> {
    return this.http.delete<PlaylistInfor>(`${this.playlistUrl}/${id}`);
  }

  getAllPlayListByUser(): Observable<any> {
    return this.http.get<any>(this.playlistByUser);
  }
}
