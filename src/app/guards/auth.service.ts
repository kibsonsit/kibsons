import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { EnvironmentUrlService } from "../shared/services/environment-url.service";
import { KibsonsWEBUserModel } from "./user.model";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { FormControl } from "@angular/forms";
import { map } from 'rxjs/operators';

declare const gapi: any;
interface SignInResponse {
  userId: string;
  sessionToken: string;
}
@Injectable()
export class AuthService {
 


  private googleAuth: any;
  private user: KibsonsWEBUserModel;
  constructor(private router: Router,
    private http: HttpClient, private jwtHelper: JwtHelperService,
    private envUrl: EnvironmentUrlService ) {
     
      }

  getCurrentUser():KibsonsWEBUserModel {
    // let user =  new KibsonsWEBUserModel("","","","","","");
    const user = new KibsonsWEBUserModel();
    // let user : any;

    let token = localStorage.getItem("jwt");  
    let googleSocialToken = localStorage.getItem("GoogleSocialUser");
    let facebookSocialToken = localStorage.getItem("FaceBookSocialUser");

    if (token){
      // user = JSON.parse(localStorage.getItem('jwt'));
    user.email = this.jwtHelper.decodeToken(token).user_email;
    user.firstname = this.jwtHelper.decodeToken(token).user_firstname;
    user.lastname = this.jwtHelper.decodeToken(token).user_lastname;
    user.provider = "Kibsons Login API";
    user.image= this.jwtHelper.decodeToken(token).user_photo;
    user.usermasterid = this.jwtHelper.decodeToken(token).user_masterid;
    //this.user.image = "";
  }   
  else if(facebookSocialToken){
    this.user = JSON.parse(facebookSocialToken);
    } 
   else if(googleSocialToken){
    this.user = JSON.parse(googleSocialToken);
    }else{
      return this.user;
    }

    
  }

    
  isSignedIn(): boolean {
    
    return this.getCurrentUser() != null;
  }

  signIn(): Promise<KibsonsWEBUserModel> {
    return new Promise<KibsonsWEBUserModel>((resolve, reject) => {
      this.googleAuth.signIn({
        // Show the prompt
        'prompt': 'consent'
      }).then(googleUser => {
        // Get Google ID token
        const token = googleUser.getAuthResponse().id_token;
        // Sign in with the back-end service
        this.http.post<SignInResponse>(this.envUrl.urlAddress + '/kibsonsapi/socialsignin', null, {
          headers: new HttpHeaders().set('Authorization', token)
        }).subscribe(res => {
          const profile = googleUser.getBasicProfile();
          // Create the user
          this.user = new KibsonsWEBUserModel;  //(res.userId, res.sessionToken, profile.getName(),"","","")
          // Save the user to local storage
          localStorage.setItem('user', JSON.stringify(this.user));
          resolve(this.user);
        }, reject);
      }, reject);
    });
  }

  validateUseremail(useremail) { 
   
    let params = new HttpParams().set("emailid",useremail); 
  return  this.http.get(this.envUrl.urlAddress + '/kibsonsapi/checkEmail',{ params: params});
  // .pipe(map(data => data))


    // return this.http.get(this.envUrl.urlAddress + 'auth/validate-username/' + useremail).map(res => res.json());
  }


}
