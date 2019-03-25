import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSongsService {
  public favSongCount;
  public $observableCounter;

  constructor() {
    this.favSongCount = 0;
    this.$observableCounter = new BehaviorSubject<number>(this.favSongCount);
  }

  addFav() {
    this.$observableCounter.next((this.favSongCount += 1));
  }

  removeFav() {
    this.favSongCount = this.favSongCount > 1 ? this.favSongCount - 1 : 0;
    this.$observableCounter.next(this.favSongCount);
  }
}
