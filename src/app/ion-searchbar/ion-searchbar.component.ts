import { Component, OnInit, NgModule } from '@angular/core';
import { SongsService } from './../services/songs-service';
import { FavoriteSongsService } from './../services/favorite-song.service'

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.scss']
})
export class IonSearchbarComponent implements OnInit {
  public favoritesNumber: number;
  constructor(private favoriteSongsService: FavoriteSongsService, private songsService: SongsService) { }

  ngOnInit() {
    this.favoriteSongsService.$observableCounter.subscribe((item: number) => this.favoritesNumber = item);
  }

  searchArtist(inputValue) {
    this.songsService.$observableArtistName.next(inputValue);
  }
}
