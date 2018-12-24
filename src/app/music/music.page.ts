import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss']
})
export class MusicPage implements OnInit {
  musicData: any[];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.getMyMusic().then(songs => {
      this.musicData = songs || [];
      this.musicData = songs.sort((a, b) => {
        return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
      });
    });
  }
}
