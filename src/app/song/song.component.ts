import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Song } from './../entities/song';
import { AppComponent } from '../app.component';
import { FavoriteSongsService } from './../services/favorite-song.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
  ]
})

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input()
  song: Song;
  constructor(private favoriteSongsService: FavoriteSongsService) { }

  ngOnInit() {
  }
  selectFavorite(song: Song) {
    song.favorite = song.favorite === undefined ? true : !song.favorite;
    song.favorite ? this.favoriteSongsService.addFav() : this.favoriteSongsService.removeFav();
  }
}
