import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements AfterViewInit {
  public settings: Settings;
  constructor(public appSettings: AppSettings, public router: Router,private navigateservice: NavigateService,) {
    this.settings = this.appSettings.settings;
  }

  goHome(): void {
    this.navigateservice.navigateTo('');
    // this.router.navigate(['/']);
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.settings.loadingSpinner = false;
    // }, 800);
    this.settings.loadingSpinner = false;
  }

}
