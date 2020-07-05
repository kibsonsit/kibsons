import { Component, OnInit } from '@angular/core';
import { UserService } from '../../guards/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { KibsonsWEBUserModel } from 'src/app/guards/user.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
 
 
 
  profileForm: FormGroup; 
  user: KibsonsWEBUserModel;
  constructor( 
    private jwtHelper: JwtHelperService, private router: Router,private userService: UserService, private navigateservice: NavigateService,
   
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder) { }
    
  ngOnInit(): void {
    console.log("IN");
     this.user = this.userService.getCurrentUser()
     console.log("OUT");
  }



  public logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("FaceBookSocialUser");
    localStorage.removeItem("GoogleSocialUser");
    this.navigateservice.navigateTo('');
    // this.router.navigate(['']);
  }

  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }


}
