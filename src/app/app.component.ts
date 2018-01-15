import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.checkPreviousAuthorization();
    });
  }

  checkPreviousAuthorization(): void { 
    // TODO hier muss noch gecheckt werden, ob der username und das password, das hier gespeichert ist, auch in der db ist und so weiter.
    // es könnten auch mehrere User gespeichert werden können.

    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
        console.log("login");
      this.rootPage = LoginPage;
    } else {
      console.log("logged in");
      this.rootPage = TabsPage;
    }
  }
}
