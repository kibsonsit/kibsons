import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { AuthService } from 'src/app/guards/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { KibsonsWEBUserModel } from 'src/app/guards/user.model';
import { UserService } from 'src/app/guards/user.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  // public userImage = 'assets/img/users/user.jpg';
  user: KibsonsWEBUserModel;
  constructor( private route: ActivatedRoute,
    private router: Router, public userService: UserService, private navigateservice: NavigateService,) { }

  ngOnInit() {
     this.user = this.userService.getCurrentUser()
}

  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("FaceBookSocialUser");
    localStorage.removeItem("GoogleSocialUser");    
    this.navigateservice.navigateTo('');
    // this.router.navigate(['']);

  }
}
