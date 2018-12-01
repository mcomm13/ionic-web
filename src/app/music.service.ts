import { Injectable } from '@angular/core';
import * as data from './data/music.json';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor() {}

  getMyMusic(): any[] {
    const music = (<any>data).songs || [];
    return music.sort((a, b) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();
      return bDate - aDate;
    });
  }
}
