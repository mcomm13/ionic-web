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
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return bDate - aDate;
      });
    });
  }
}
