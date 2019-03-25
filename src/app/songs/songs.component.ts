import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Song } from '../entities/song';
import { SongsService } from './../services/songs-service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})

export class SongsComponent implements OnInit {

  public songs: Song[] = [];

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.songsService.$observableArtistName.pipe(debounceTime(300)).subscribe(name => this.songsService.getSongs(name)
    .subscribe(data => this.songs = !name ? [] : name.trim() !== '' ? data.results : []));
  }

}
