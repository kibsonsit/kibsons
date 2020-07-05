import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'KibsonsWEB',   // theme name
        true,       // loadingSpinner
        true,      // fixedHeader
        true,      // fixedSidenav
        false,      // fixedSidenavUserContent
        false,      // fixedFooter
        false,       // sidenavIsOpened
        false,       // sidenavIsPinned
        'horizontal', // horizontal , vertical
        'default',  // default, compact, mini
        'indigo-light',   // indigo-light, teal-light, red-light, gray-light, blue-dark, green-dark, pink-dark, gray-dark
        false       // true = rtl, false = ltr
    );
}

