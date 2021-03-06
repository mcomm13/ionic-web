import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'paper'
    },
    {
      title: 'Mobile Apps',
      url: '/mobile-apps',
      icon: 'appstore'
    },
    {
      title: 'Resume',
      url: '/resume',
      icon: 'laptop'
    },
    {
      title: 'Music',
      url: '/music',
      icon: 'musical-notes'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
