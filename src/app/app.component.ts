import { Component, OnInit, NgZone} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public settings: Settings;
  subscription: Subscription;
  authentication: boolean;

  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {
    this.fbLibrary();
   }
  fbLibrary() {
 
    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '259168315327232',
        cookie     : true,
        xfbml      : true,
        version    : 'v7.0'
      });
      window['FB'].AppEvents.logPageView();
    };
 
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
 
}
}
