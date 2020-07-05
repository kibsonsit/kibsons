import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from '../../app.settings.model';
import { Router } from '@angular/router';
import { emailValidator,alphabetValidator, alphanumericValidator, numericValidator, dateValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';
import { MatSnackBar } from '@angular/material';
import { UseremailValidator } from 'src/app/guards/useremail.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { UserService } from 'src/app/guards/user.service';
import { KibsonsWEBUserModel } from 'src/app/guards/user.model';
import { PagesComponent } from '../pages.component';
import { blockTransition } from '../../theme/utils/app-animation';

interface Gender {
  value: number;
  name: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit {
  // @Output()  = new EventEmitter();
  @Output() userLogin: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public settings: Settings;
  public myUser : KibsonsWEBUserModel;
  public mnuMyAccount =false;
  public myUserName: string;
  public myImage: string;
  invalidLogin: boolean;
  errorMessage: string = '';
  startDate = new Date(1990, 0, 1);
  public btnOTP : boolean=true;
  constructor(public appSettings: AppSettings, 
    // public authService: AuthService,
    public fb: FormBuilder, 
    private router: Router, 
    private http: HttpClient, 
    private envUrl: EnvironmentUrlService, 
    private navigateservice: NavigateService,    
    public pagesComponent: PagesComponent,
    public userService: UserService,
    private snackBar: MatSnackBar, public useremailvalidator: UseremailValidator) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'firstname': [null, Validators.compose([Validators.required,alphabetValidator])],
      'lastname': [null, Validators.compose([Validators.required, alphabetValidator])],
      'email': [null, Validators.compose([Validators.required, emailValidator]),useremailvalidator.checkUserEmail.bind(useremailvalidator)],
      'cellphone': [null, Validators.compose([Validators.required])],
      'verificationcode': [null, Validators.compose([Validators.required])],
      'dob': [null, Validators.compose([Validators.required, dateValidator])],
      'gender': [null, Validators.compose([Validators.required])],
      'nationality': [null, Validators.compose([alphabetValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmpassword': [null, Validators.compose([Validators.required, Validators.minLength(6)]),matchingPasswords( 'password','confirmpassword')]
    });}
    
  genders: Gender[] = [
    {value:0, name: 'Female'},
    {value:1, name: 'Male'},
    {value:3, name: 'Prefer not to disclose'}
  ];

  //***********************************firebase straight email login */
  // tryRegister(form: NgForm){
  //   // login(form: NgForm){
  //   this.authService.doRegister(form)
  //   .then(res => {
  //     console.log(res); 
  //     this.router.navigate(['/blank']);
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //   })
  // }

  tryRegister(form: NgForm) {
    var data = { 
      'firstname': form.value.firstname,
      'lastname': form.value.lastname,
      'email': form.value.email,
      'cellphone': form.value.cellphone,
      'dob': form.value.dob,
      // 'gender': form.value.gender.name,
       'gender': "M",
      'nationality': form.value.nationality,
      'password': form.value.password,
      'providercode': "00800",
      'status':1
    };
    const obj = JSON.stringify(data);

    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/signup', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      // console.log(response);
      this.snackBar.open("Registration Successful!!!", "User Registration", {duration: 5000});
     
        this.loadMyAccount();
     
this.navigateservice.navigateTo('shopping');
      // this.router.navigate(['blank']);
    }, err => {
      console.log(err.error);
      this.invalidLogin = true;
    });
    
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    }, 800);
    // this.settings.loadingSpinner = false;
  }
  addPrefix(event) {
    this.form.controls['cellphone'].setValue('+971');    
  }

  sendOTP(){
   var formdata = {
      'phonenumber':this.form.value.cellphone,
      'code':"0"
    }
    const obj = JSON.stringify(formdata);
    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/SendOTP', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      let control = this.form.get('cellphone')
      // control.disable();
      this.btnOTP=false;
      this.snackBar.open("SMS Sent to : " + formdata.phonenumber, "SMS Sent", {
        duration: 5000, 
      });
      console.log(response);
    },err => {
      let control = this.form.get('cellphone')
      control.enable();
      this.snackBar.open(err.error.text, "SMS Error", {
        duration: 3000,
      });
      this.btnOTP=true;
    this.invalidLogin = true;
    });

  }

onBlur($event) {
  var formdata = {
    'phonenumber':this.form.value.cellphone,
    'code': this.form.value.verificationcode
  }
  const obj = JSON.stringify(formdata);
  this.http.post(this.envUrl.urlAddress + '/kibsonsapi/VerifyOTP', obj, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).subscribe(response => {    
    this.snackBar.open("Verified Successfully !!!", "OTP Verification", {
      duration: 5000, 
    });
  },err => {
    let control = this.form.get('verificationcode');
    control.setErrors;
    console.log(control.setErrors);
    this.snackBar.open(err.error, "OTP Verification", {
      duration: 5000,
    });
  this.invalidLogin = true;
  });
  }

  loadClearForm(event){
    event.preventDefault()
    this.form.reset();
  }


  loadMyAccount(){
    if(this.userService.isSignedIn()){
      this.myUser = this.userService.getCurrentUser();
      this.pagesComponent.myUser = this.myUser;
      this.pagesComponent.myUserName= this.myUser.firstname;
      this.pagesComponent.myImage = (this.myUser.image!="NO_IMAGE") ? this.myUser.image:"assets/img/KB_icons_headerfooter_0016_W_account.png";
      this.pagesComponent.mnuMyAccount=true;      
      // mnuMyAccount
    }
    else{
      this.myUser = null; 
      this.myUserName= null;
      this.myImage = null;
      this.mnuMyAccount=false;
    }
  }


}
