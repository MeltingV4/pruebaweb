import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) { }

  url() {

    let options:InAppBrowserOptions={
      //zoom:'no',
      //footer:'yes',
      //footercolor:'green',
    }
    this.iab.create('https://ionicframework.com/','_self',options);

  }

}
