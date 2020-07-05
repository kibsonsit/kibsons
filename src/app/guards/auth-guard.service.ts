import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NavigateService } from '../shared/services/navigate.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../shared/login/login.component';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router, 
    public loginDialog : MatDialog,
    private navigateservice: NavigateService,) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      
      return true;
    }

    if ( localStorage.getItem('FaceBookSocialUser') ) {
      return true;
    }
  if ( localStorage.getItem('GoogleSocialUser') ) {
  return true;
}
//this.navigateservice.navigateTo('login');
  //  return false;

  let dialogRef = this.loginDialog.open(LoginComponent, {
     data: {  }
});

dialogRef.afterClosed().subscribe(result => {  
   if(result.data.Status){
    this.navigateservice.navigateTo(state.url);
    return result.data.Status;
  }

}); 


   
  }
}
