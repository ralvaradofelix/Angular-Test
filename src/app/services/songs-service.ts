import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../entities/song';
import { Observable, BehaviorSubject, EMPTY } from 'rxjs';

interface ApiResult {
  results: Song[];
}

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  $observableArtistName = new BehaviorSubject<string>(null);
  constructor(private httpClient: HttpClient) {}

  getSongs(keyWord: string): Observable<ApiResult> {
    const url = `https://itunes.apple.com/search?term="${keyWord}"&entity=song`;

    keyWord = keyWord === '' ? null : keyWord;
    return this.httpClient.get<ApiResult>(url);
  }
}
