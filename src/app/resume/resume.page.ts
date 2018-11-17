import { Component, OnInit } from '@angular/core';
import * as data from '../data/resume.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss']
})
export class ResumePage implements OnInit {
  resumeData: object;
  constructor() {}

  ngOnInit() {
    this.resumeData = <any>data;
  }
}
