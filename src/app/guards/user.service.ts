import { Injectable } from "@angular/core";
// import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { KibsonsWEBUserModel } from "./user.model";

@Injectable()
export class UserService {
  private user: KibsonsWEBUserModel;
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  getCurrentUser(): KibsonsWEBUserModel {
    //  let user = new KibsonsWEBUserModel("", "", "", "", "", "");
     const user = new KibsonsWEBUserModel();
    //let user : any;
    let token = localStorage.getItem("jwt");
    let googleSocialToken = localStorage.getItem("GoogleSocialUser");
    let facebookSocialToken = localStorage.getItem("FaceBookSocialUser");
    if (token) {
      // user = JSON.parse(localStorage.getItem('jwt'));
      user.email = this.jwtHelper.decodeToken(token).user_email;
      user.firstname = this.jwtHelper.decodeToken(token).user_firstname;
      user.lastname = this.jwtHelper.decodeToken(token).user_lastname;
      user.provider = "KIBSONS Login API";
      user.image= this.jwtHelper.decodeToken(token).user_photo;
      user.usermasterid=this.jwtHelper.decodeToken(token).user_masterid;
    } else if (facebookSocialToken) {
      console.log(JSON.parse(localStorage.getItem("FaceBookSocialUser")));
      user.email = JSON.parse(facebookSocialToken).email;
      user.firstname = JSON.parse(facebookSocialToken).first_name;
      user.lastname = JSON.parse(facebookSocialToken).last_name;
      user.provider = "FACEBOOK Login API";
      user.image = JSON.parse(facebookSocialToken).picture.data.url;
    } else if (googleSocialToken) {
      console.log(JSON.parse(localStorage.getItem("GoogleSocialUser")));
      user.email = JSON.parse(googleSocialToken).Du;
      user.firstname = JSON.parse(googleSocialToken).sW;
      user.lastname = JSON.parse(googleSocialToken).tU;
      user.provider = "GOOGLE Login API";
      user.image = JSON.parse(googleSocialToken).SK;
    }
    else {return null;}
    return user;
  }
  isSignedIn(): boolean {
    // console.log(this.getCurrentUser);
    return this.getCurrentUser() != null;
  }
}
