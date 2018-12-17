import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http: HttpClient) {}

  getMyMusic(): Promise<any> {
    return this.http
      .get('/api/music')
      .toPromise()
      .then((songs: any) => {
        console.log(songs);
        return songs && songs.data;
      });
  }
}
