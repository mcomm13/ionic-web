import { Component } from '@angular/core';

interface ContactInfo {
  facebook: string;
  twitter: string;
  linkedin: string;
  email: string;
  github: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  contactInfo: ContactInfo = {
    facebook: 'https://www.facebook.com/profile.php?id=9031270',
    twitter: 'https://twitter.com/mcomm13',
    linkedin: 'https://www.linkedin.com/in/michael-commendatore-16654b93/',
    email: 'michael.commendatore@outlook.com',
    github: 'https://github.com/mcomm13'
  };
}
