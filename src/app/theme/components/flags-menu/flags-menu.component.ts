import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-flags-menu',
  templateUrl: './flags-menu.component.html',
  styleUrls: ['./flags-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlagsMenuComponent implements OnInit {

  public settings: Settings;
  constructor(public appSettings: AppSettings,private router: Router) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
  }

changeLanguage(varlang,rtl){
  if(rtl){
this.appSettings.settings.rtl=true;
  }else{
    this.appSettings.settings.rtl=false;
  }
  // RouterLink[varlang];
}

}
