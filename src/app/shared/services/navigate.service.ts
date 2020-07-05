import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private zone: NgZone, public router: Router) { }

  public navigateTo(arg: string): void {
    this.zone.run(() => {
        this.router.navigateByUrl(`/${arg}`);
        // this.router.navigate(['blank']);
    });
}

}
