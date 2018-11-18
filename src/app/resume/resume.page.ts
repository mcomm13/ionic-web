import { Component, OnInit } from '@angular/core';
import * as data from '../data/resume.json';

interface Resume {
  jobs: Array<object>;
  skills: Array<string>;
  education: Array<object>;
  otherAccomplishments: Array<string>;
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss']
})
export class ResumePage implements OnInit {
  resumeData: Resume;
  constructor() {}

  ngOnInit() {
    this.resumeData = <any>data;
  }
}
