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
    this.musicData = this.musicService.getMyMusic();
  }
}
