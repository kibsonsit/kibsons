import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { emailValidator, matchingPasswords } from "../../theme/utils/app-validators";
import { AppSettings } from "../../app.settings";
import { Settings } from "../../app.settings.model";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EnvironmentUrlService } from "src/app/shared/services/environment-url.service";
import { SnackBarComponent } from "src/app/shared/snack-bar/snack-bar.component";
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { AppComponent } from "src/app/app.component";
import { NavigateService } from "../services/navigate.service";

declare var FB: any;

@Component({
  selector: 'dialog-openlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {
  @ViewChild('googleLoginRef', {static: true }) loginElement: ElementRef;
  auth2: any;

  public form: FormGroup;
  public settings: Settings;
  invalidLogin: boolean;
  errorMessage: string = "";
  LoginError=null;
  

  public animal: string;
  public name: string;
  public hide = true;
  get emailInput() { return this.form.get('email'); }
  get passwordInput() { return this.form.get('password'); } 
  constructor(
    public appSettings: AppSettings,  
    public fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private envUrl: EnvironmentUrlService,
    private navigateservice: NavigateService,
    public forgotpassdialog : MatDialog ,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, emailValidator])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe:false
    });
  }
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '765623504677-7ikt7igooq72ksqbk02u3rcs5q6jvcmq.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.tryGoogleLogin();
      }); 
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  ngOnInit(): void {
    this.googleInitialize();
  }
 
  tryRegister(form: NgForm) {

    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/signup', form, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      console.log(response);
      this.invalidLogin = false;
      // this.navigateservice.navigateTo('blank');
      // this.router.navigate(['blank']);
    }, err => {
      this.invalidLogin = true;
    });
    
  }
  openRegister(event){
    
    // this.dialogRef.close();
    // this.dialogRef.close("Thanks for using me!");
    this.dialogRef.close({ event: 'close', data: {"Status":false}});
this.navigateservice.navigateTo("register");
  }

  tryLogin(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/signin', form, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.snackBar.open("Logged in Successfully !!! ", "Login Success", {
        duration: 5000,
      });

      // this.navigateservice.navigateTo('shopping');
      
       this.dialogRef.close({ event: 'close', data: {"Status":true}});
    // this.dialogRef.close();
    },err => {
      this.snackBar.open("Login Failed ", "Login Error", {
        duration: 5000,
      });

    this.invalidLogin = true;
    });
  }

  tryFacebookLogin(){
    window['FB'].login((response) => {
      console.log(response);
      //localStorage.setItem('FaceBookSocialUser', JSON.stringify( response)); 
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'first_name, last_name, email, picture'
        }, (userInfo) => {
          localStorage.setItem('FaceBookSocialUser', JSON.stringify( userInfo));  
          console.log("user information");
          console.log(userInfo);  
          
      this.invalidLogin = false;      
      // this.navigateservice.navigateTo('blank');
      // this.router.navigate(['blank']);
        });
      } else {
        this.snackBar.open('User login failed', "Login Error", {
          duration: 5000,
        });
      this.invalidLogin = true;
      }
  }, {scope: 'email'});
  }
  
  tryGoogleLogin() {        
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        localStorage.setItem('GoogleSocialUser', JSON.stringify( googleUser.getBasicProfile()));  
        // let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        // console.log(profile);
        // console.log(localStorage.getItem("SocialUser"))
        this.invalidLogin = false;    
        //this.router.navigateByUrl('/blank');  
        // this.navigateservice.navigateTo('blank');
      }, (err) => {
        this.snackBar.open(err.error, "Login Error", {duration: 5000});
       this.invalidLogin = true;  
      });

      if(!this.invalidLogin){
        // this.navigateservice.navigateTo('blank');
        // this.router.navigate(['blank']);
      }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    }, 800);
    // this.settings.loadingSpinner = false;
  } 


  openForgotPassDialog(form: NgForm): void {
      let dialogRef = this.forgotpassdialog.open(DialogForgotPass, {
        data: {name:form.value.email, emailValidator: form.value.email}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.animal = result;
      });
    }
  
}


@Component({
  selector: 'dialog-forgotpass',  
  styleUrls: ["./login.component.scss"],
  templateUrl: 'forgotpass.component.html',
})
export class DialogForgotPass {

  public form: FormGroup; 
public verifyshow: boolean=false ;
public Passwordshow: boolean=false ;
public resetpasswordhide=true;
public resetconfirmhide=true;

  sendOTPto: any;
  toEmail:any;
  toMobile: any;

  constructor(
    public dialogRef: MatDialogRef<DialogForgotPass>,  public fb: FormBuilder,  private snackBar: MatSnackBar, private http: HttpClient, private envUrl: EnvironmentUrlService,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
     this.form = this.fb.group({
        'sendOTPto':[null],
        'verificationcode': [null],
        'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmpassword': [null, Validators.compose([Validators.required]), matchingPasswords( 'password','confirmpassword')]
      });
    }

   
onNoClick(form: NgForm): void {
this.sendOTP(this.data.name, form.value.sendOTPto);
    // this.dialogRef.close();
  }

  sendOTP(sendto,sendtype){
    var formdata = {
       'OTPReceiver':sendto,
       'ReceiverType':sendtype,
       'Code':"0"
     }
     const obj = JSON.stringify(formdata);
     this.http.post(this.envUrl.urlAddress + '/kibsonsapi/SendOTP', obj, {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     }).subscribe(response => {
      console.log(response);
       this.snackBar.open("OTP Sent to : " + formdata.OTPReceiver, "SMS Sent", {
         duration: 5000, 
       });
       this.verifyshow = true;
       
     },err => {
      // this.form.get('username')
      console.log(err);
       this.snackBar.open(err, "SMS Error", {
         duration: 3000,
       });
     });
 
   }

   onBlur($event) {
    var formdata = {
      'OTPReceiver':  this.data.name  ,
      'ReceiverType': this.form.value.sendOTPto,
      'code': this.form.value.verificationcode
    }
    console.log(formdata);
    const obj = JSON.stringify(formdata);
    console.log(obj);
    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/VerifyOTP', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      
      this.snackBar.open("Verified Successfully !!!", "OTP Verification", {
        duration: 5000, 
      });
      this.Passwordshow = true;
    },err => {
      let control = this.form.get('verificationcode');
      control.setErrors;
      console.log(control.setErrors);
      this.snackBar.open(err.error, "OTP Verification", {
        duration: 5000,
      });
    });
    }

}




