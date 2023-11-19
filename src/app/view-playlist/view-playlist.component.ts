import { Component } from '@angular/core';
//import {album} from '../interfaces/album';
import {Playlist} from '../interfaces/playlist';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent {
  playlists : Playlist[] = [
    {
      name : "chilling",
      num_songs : 12,
      songs: [
        "Durag Activities",
        "Scars",
        "Trademark USA"
      ]
    },
    {
      name : "Workout",
      num_songs : 12,
      songs: [
        "Durag Activities",
        "Scars",
        "Trademark USA"
      ]
    }
      ,
    {
      name : "Feel Good",
      num_songs : 12,
      songs: [
        "Durag Activities",
        "Scars",
        "Trademark USA"
      ]
    }]
}
