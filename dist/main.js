(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\" [ngClass]=\"settings.theme\"\r\n    [class.fixed-header]=\"settings.fixedHeader\" [class.fixed-sidenav]=\"settings.fixedSidenav\"\r\n    [class.fixed-footer]=\"settings.fixedFooter\" [class.horizontal-menu]=\"settings.menu == 'horizontal'\"\r\n    [class.compact]=\"settings.menuType == 'compact'\" [class.mini]=\"settings.menuType == 'mini'\">\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\">\r\n        <mat-spinner color=\"primary\"></mat-spinner>\r\n        <img src=\"assets/img/logo.png\" class=\"animated-logo\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addressdetails/addressdetails.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addressdetails/addressdetails.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-2\">\n    <mat-card class=\"custom-card \">\n        <mat-card-header class=\"bg-primary p-2\" fxLayoutAlign=\"space-between center\">\n            <mat-card-title class=\"m-0\">\n                <h2>Address Details</h2>\n            </mat-card-title>\n            <mat-icon>email</mat-icon>\n        </mat-card-header>\n        <mat-card-content class='p-2'>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <form [formGroup]=\"form\"  #addressDetails=\"ngForm\"  class=\"mat-elevation-z6\">\n             <div fxLayout=\"column wrap\" class=\"mat-elevation p-2 m-2\" >\n                <h1 mat-dialog-title>Delivery Address</h1>\n                <div >\n                <mat-form-field fxFlex appearance=\"outline\" >\n                    <mat-label>Address Title</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">email</mat-icon>\n                    <input matInput placeholder=\"Address Title\"  name=\"addresstitle\" formControlName=\"addresstitle\" >\n                </mat-form-field>\n            </div>\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Emirates</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">account_balance</mat-icon>\n                    <input #autocounty matInput placeholder=\"County\"matInput [matAutocomplete]=\"auto\" name=\"county\" formControlName=\"county\"  type=\"text\" >\n                   \n\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n      </mat-autocomplete>\n\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Area</mat-label>\n        <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">account_balance</mat-icon>\n        <input #autoarea matInput placeholder=\"Area\"  [matAutocomplete]=\"auto1\" name=\"area\" formControlName=\"area\"  type=\"text\" >\n       \n\n<mat-autocomplete #auto1=\"matAutocomplete\">\n<mat-option *ngFor=\"let option1 of filteredOptions1 | async\" [value]=\"option1\">\n{{option1}}\n</mat-option>\n</mat-autocomplete>\n\n</mat-form-field>\n\n\n                <!-- <mat-form-field fxFlex=\"50\"  appearance=\"outline\" >\n                    <mat-label>Area</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">group</mat-icon>\n                    <input matInput placeholder=\"Area\" name=\"area\"  formControlName=\"area\"  >\n                    \n                </mat-form-field>  -->\n            </div>\n<div >\n                <mat-form-field fxFlex=\"50\"  appearance=\"outline\" >\n                    <mat-label>Address 1</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">input</mat-icon>\n                    <input matInput placeholder=\"Address\"  name=\"address1\" formControlName=\"address1\">\n                    <!-- <mat-hint>Cell Phone Number</mat-hint> -->\n                </mat-form-field> \n                <mat-form-field fxFlex=\"50\" appearance=\"outline\" >\n                    <mat-label>Address 2</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">input</mat-icon>\n                    <input matInput placeholder=\"Address\" name=\"address2\" formControlName=\"address2\" >\n                    <!-- <mat-hint>Cell Phone Number</mat-hint> -->\n                </mat-form-field> \n            </div>\n<div>\n                <mat-form-field fxFlex appearance=\"outline\" >\n                    <mat-label>Nearest Landmark</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">near_me</mat-icon>\n                    <input matInput placeholder=\"Landmark\" name=\"landmark\" formControlName=\"landmark\" >\n                    <!-- <mat-hint>Cell Phone Number</mat-hint> -->\n                </mat-form-field> \n            </div>\n            <div >\n\n                    <button i18n mat-mini-fab color=\"primary\" matTooltip=\"Click here to Mark Location on MAP\"(click)=\"openGoogleMapDialog()\" tabindex=\"-1\">\n                        <mat-icon matPrefix >location_on</mat-icon>\n                    </button>\n\n                <mat-form-field  appearance=\"outline\" >\n                    <mat-label>Latitude</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">pin_drop</mat-icon>\n                    <input matInput placeholder=\"Latitude\" name=\"latitude\" formControlName=\"latitude\" >\n                    <!-- <mat-hint>Cell Phone Number</mat-hint> -->\n                </mat-form-field> \n                <mat-form-field  appearance=\"outline\" >\n                    <mat-label>Longitude</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">pin_drop</mat-icon>\n                    <input matInput placeholder=\"Longitude\" name=\"longitude\" formControlName=\"longitude\" >\n                    <!-- <mat-hint>Cell Phone Number</mat-hint> -->\n                </mat-form-field> \n            </div>\n            <div fxLayoutAlign=\"center\">\n            <button mat-raised-button class=\"mat-elevation m-2\" matTooltip=\"Click to Clear the from\" (click)=\"resetForm();submitted = false\" color=\"warn\" >Clear</button> \n            <button mat-raised-button class=\"mat-elevation m-2\" [disabled]=\"!AddDisabled\" matTooltip=\"Click to Add the Data\" (click)=\"addaddressdetails(addressDetails);submitted = false\" color=\"primary\">Add</button> \n            <button mat-raised-button class=\"mat-elevation m-2\" [disabled]=\"!UpdateDisabled\" matTooltip=\"Click to Update the Data\" (click)=\"updateaddressdetails(addressDetails);submitted = false\" color=\"primary\">Update</button> \n        </div>\n\n            </div>\n        </form>\n\n            <mat-divider [vertical]=\"true\"></mat-divider>\n            <div class=\"mat-elevation p-2 m-2\" fxLayout=\"column wrap\" >\n                <h1 mat-dialog-title>Address List </h1>\n                <mat-table class=\"mat-elevation-z8 p-2\" [dataSource]=\"dsaddressdetails\">\n                                                                        <ng-container matColumnDef=\"slno\">\n                                                                            <mat-header-cell *matHeaderCellDef>Sl. No</mat-header-cell>\n                                                                            <mat-cell *matCellDef=\"let element\">{{element.slno}} </mat-cell>\n                                                                        </ng-container>\n                                                                        <ng-container matColumnDef=\"addresstitle\">\n                                                                            <mat-header-cell *matHeaderCellDef>Address Title</mat-header-cell>\n                                                                            <mat-cell *matCellDef=\"let element\">{{element.addressTitle}} </mat-cell>\n                                                                        </ng-container>\n                                                                        <ng-container matColumnDef=\"county\">\n                                                                            <mat-header-cell *matHeaderCellDef>County</mat-header-cell>\n                                                                            <mat-cell  *matCellDef=\"let element\">{{element.county}}</mat-cell>\n                                                                        </ng-container>\n                                                                        <ng-container matColumnDef=\"area\">\n                                                                            <mat-header-cell *matHeaderCellDef>Area</mat-header-cell>\n                                                                            <mat-cell *matCellDef=\"let element\">{{element.area}}</mat-cell>\n                                                                        </ng-container>\n                                                                        <ng-container matColumnDef=\"address\">\n                                                                            <mat-header-cell *matHeaderCellDef>Address</mat-header-cell>\n                                                                            <mat-cell  *matCellDef=\"let element\">{{element.address1}} <br> {{element.address2}}</mat-cell>\n                                                                        </ng-container>\n                                                                        <ng-container matColumnDef=\"landmark\">\n                                                                            <mat-header-cell *matHeaderCellDef>Landmark</mat-header-cell>\n                                                                            <mat-cell *matCellDef=\"let element\">{{element.landMark}}</mat-cell>\n                                                                        </ng-container>\n                                                                        <mat-header-row\n                                                                            *matHeaderRowDef=\"addressdetailcolumns\"></mat-header-row>\n                                                                        <mat-row class=\"element-row\" *matRowDef=\"let row; columns: addressdetailcolumns;\" (click)=\"getselected(row); UpdateDisabled=true; AddDisabled=false;\">\n                                                                        </mat-row>\n                                                                    </mat-table></div>\n\n        </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addressdetails/openmap.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addressdetails/openmap.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"mat-elevation-z8\">\r\n  <mat-card class=\"custom-card \">\r\n    <mat-card-header class=\"bg-primary p-2\" fxLayoutAlign=\"space-between center\">\r\n      <mat-card-title class=\"m-0\">\r\n        <h2>Search / Select Your Location</h2>\r\n      </mat-card-title>\r\n      <mat-icon>map</mat-icon>\r\n    </mat-card-header>\r\n    <mat-card-content class='p-2'>\r\n      <div>\r\n        <label>Enter address </label>\r\n        <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\"\r\n          placeholder=\"Search Nearest Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search>\r\n      </div>\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\r\n          (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n      </agm-map>\r\n      <h5>Address: <b>{{address}}</b></h5>\r\n      <div fxLayout=\"row\">\r\n        <div>Latitude: <b>{{latitude}}</b>, Longitude: <b>{{longitude}}</b></div>\r\n      </div>\r\n      <div \r\n      fxLayout=\"row\" fxLayoutAlign=\"center\"  class=\"p-3\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"CloseMapDialog()\"   >Done</button> \r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- \r\n<agm-map \r\n[latitude]=\"latitude\" \r\n[longitude]=\"longitude\" \r\n[zoom]=\"zoom\" >\r\n  <agm-marker \r\n  [latitude]=\"latitude\" \r\n  [longitude]=\"longitude\"></agm-marker>\r\n</agm-map> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/blank/blank.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/blank/blank.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-content-header></app-content-header> -->\r\n\r\n\r\n  <div  fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"p-2\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n      <div class=\"card\" style=\"width: 20rem;\">\r\n        <img class=\"card-img-top image\" [src]=\"user.image\" *ngIf=\"user.image\" alt=\"User image\">\r\n        <img class=\"card-img-top image\" src=\"https://via.placeholder.com/400x300\" *ngIf=\"!user.image\" alt=\"User image\">\r\n        <div *ngIf='user.provider != \"password\"'class=\"card-body\">\r\n          <h4 class=\"card-title\">{{user.name}}</h4>\r\n          <h4 class=\"card-title\">{{user.provider}}</h4>\r\n        </div>\r\n        <div *ngIf='user.provider == \"password\"'class=\"card-body\">\r\n          <form [formGroup]=\"profileForm\">\r\n            <div class=\"form-group\">\r\n              <label>Your name</label>\r\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\r\n            </div>\r\n          </form>\r\n          <a (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">Save</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/deliverylocation/deliverylocation.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/deliverylocation/deliverylocation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>deliverylocation works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/errors/error/error.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/errors/error/error.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"h-100\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" class=\"mat-elevation-z6\">\r\n            <app-content-header [icon]=\"'warning'\" [title]=\"'500'\" [hideBreadcrumb]=\"true\" [hasBgImage]=\"true\"\r\n                [class]=\"'pt-4 pb-3'\"></app-content-header>\r\n            <div class=\"p-4 text-center\">\r\n                <h2 class=\"py-2\">INTERNAL SERVER ERROR</h2>\r\n                <p class=\"pt-2\">Opps, something went wrong.</p>\r\n                <p class=\"pt-2\">You can go to home page.</p>\r\n                <button mat-raised-button color=\"primary\" class=\"mat-elevation-z6 mt-3\" type=\"button\"\r\n                    (click)=\"goHome()\">GO HOME</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/errors/not-found/not-found.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/errors/not-found/not-found.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"h-100\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" class=\"mat-elevation-z6\">\r\n            <app-content-header [icon]=\"'error'\" [title]=\"'404'\" [hideBreadcrumb]=\"true\" [hasBgImage]=\"true\"\r\n                [class]=\"'pt-4 pb-3'\"></app-content-header>\r\n            <div class=\"p-4 text-center\">\r\n                <p class=\"pt-2\">Opps, it seems that this page does not exist.</p>\r\n                <p class=\"pt-2\">If you are sure it should, search for it.</p>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"mt-3\">\r\n                    <mat-form-field class=\"w-100 py-2\">\r\n                        <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">search</mat-icon>\r\n                        <input matInput formControlName=\"param\" placeholder=\"Enter search keyword...\">\r\n                        <mat-error *ngIf=\"form.controls.param.errors?.required\">Text is required</mat-error>\r\n                    </mat-form-field>\r\n                    <div class=\"mt-3\">\r\n                        <button [disabled]=\"!form.valid\" mat-raised-button color=\"accent\" class=\"mat-elevation-z6 mx-1\"\r\n                            type=\"submit\">SEARCH</button>\r\n                        <button mat-raised-button color=\"primary\" class=\"mat-elevation-z6 mx-1\" type=\"button\"\r\n                            (click)=\"goHome()\">GO HOME</button>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/forgotpass.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/forgotpass.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"mat-elevation-z8\">\r\n    <mat-card class=\"custom-card \" >\r\n        <mat-card-header class=\"bg-primary p-2\" fxLayoutAlign=\"space-between center\">\r\n            <mat-card-title class=\"m-0\">\r\n                <h2>Reset Password</h2>\r\n            </mat-card-title>\r\n            <mat-icon>business</mat-icon>\r\n        </mat-card-header>\r\n        <mat-card-content class='p-2'>\r\n            <h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n            <div mat-dialog-content>\r\n                <form [formGroup]=\"form\"\r\n                                  #forgotPassForm=\"ngForm\"\r\n                                  >\r\n            <div>\r\n                <p>We will send you a OTP, where do you want to receive ?</p>\r\n                <mat-radio-group fxLayoutAlign=\"start center\" formControlName=\"sendOTPto\"  [(ngModel)]=\"sendOTPto\"\r\n                 fxLayout=\"column\" >\r\n                    <mat-radio-button style=\"font-size: 20px; margin: 5px 0 0 0\" [checked]=\"toEmail\" value=\"toEmail\">to Email</mat-radio-button>\r\n                    <mat-radio-button style=\"font-size: 20px; margin: 5px 0 0 0\" [checked]=\"toMobile\" value=\"toMobile\">to Mobile</mat-radio-button>\r\n                </mat-radio-group>\r\n                <div *ngIf=\"sendOTPto\" fxLayoutAlign=\"end center\">\r\n                    <button i18n mat-raised-button color=\"primary\" class=\"loginBtn loginBtn--kibsons\" \r\n                    (click)=\"onNoClick(forgotPassForm)\" tabindex=\"-1\">Send OTP</button>\r\n                </div>\r\n                <mat-form-field *ngIf=\"verifyshow\" appearance=\"outline\"  >\r\n                    <mat-label>Verfication Code</mat-label>\r\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">verified_user</mat-icon>\r\n                    <input disabled  mat-Badge=\"X\" matBadgeColor=\"warn\" matInput placeholder=\"Verification Code\" formControlName=\"verificationcode\" (blur)=\"onBlur($event)\">\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n \r\n        <div *ngIf=\"Passwordshow\" fxLayout=\"column\">\r\n        <mat-form-field appearance=\"outline\">\r\n            <mat-label>Password</mat-label>\r\n            <input matInput  [type]=\"resetpasswordhide ? 'password' : 'text'\" placeholder=\"Password\" formControlName=\"password\">\r\n            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon>\r\n            <mat-icon matSuffix (click)=\"resetpasswordhide = !resetpasswordhide\">{{resetpasswordhide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n            <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\">\r\n            <mat-label>Confirm Password</mat-label>\r\n            <input matInput  [type]=\"resetconfirmhide ? 'password' : 'text'\" placeholder=\"Confirm Password\" formControlName=\"confirmpassword\">    \r\n            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon>\r\n            <mat-icon matSuffix (click)=\"resetconfirmhide = !resetconfirmhide\">{{resetconfirmhide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            <mat-error *ngIf=\"form.controls.confirmpassword.errors?.required\">Confirm Password is required</mat-error>\r\n            <mat-error *ngIf=\"form.controls.confirmpassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n        </mat-form-field>\r\n       </div>\r\n\r\n\r\n            </form>\r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container style=\"max-width: 1050px; margin: auto;\" >\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 p-3\">\r\n        <!-- <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" fxFlex=\"90\" fxFlex.gt-sm=\"30\" -->\r\n        <div class=\"mat-elevation-z6\">\r\n            <div fxLayout=\"column\">\r\n                <form [formGroup]=\"form\"\r\n                      fxFlex=\"50\"\r\n                      #loginForm=\"ngForm\"\r\n                      fxFlex.gt-sm=\"20\"\r\n                      fxFlex.sm=\"30\"\r\n                      (ngSubmit)=\"tryLogin(loginForm.value)\">\r\n                    <!-- <div fxLayoutAlign=\"end center\">\r\n                        <app-flags-menu></app-flags-menu>\r\n                    </div> -->\r\n                    <!-- <app-content-header [icon]=\"'exit_to_app'\"\r\n                                        [title]=\"'Kibsons Login'\"\r\n                                        [hideBreadcrumb]=\"true\"\r\n                                        [hasBgImage]=\"true\"\r\n                                        [class]=\"'p-4'\">\r\n                    </app-content-header> -->\r\n\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-3\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label i18n>Email</mat-label>\r\n                            <mat-icon matPrefix\r\n                                      class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">mail</mat-icon>\r\n                                      <mat-icon matSuffix (click)=\"hide = !hide\"></mat-icon>\r\n                            <input i18n\r\n                                   matInput\r\n                                   formControlName=\"email\" />\r\n                            <mat-error i18n *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                            <mat-error i18n\r\n                                       *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                            <mat-hint i18n>Registered Email</mat-hint>\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label i18n>Password</mat-label>\r\n                            <input matInput  placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\r\n                            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon>\r\n                            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                            <mat-error i18n *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                            <mat-error i18n  *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                            <mat-hint *ngIf=\"!passwordInput\">Enter your password</mat-hint>\r\n                        </mat-form-field>\r\n\r\n                        <!-- <mat-form-field appearance=\"outline\">\r\n                            <mat-label i18n>Password</mat-label>\r\n                            <mat-icon matPrefix\r\n                                      class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon>\r\n                            <input matInput\r\n                                   type=\"password\"\r\n                                   formControlName=\"password\" />\r\n                            <mat-error i18n *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                            <mat-error i18n  *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                            <mat-hint i18n>Login Password</mat-hint>\r\n                        </mat-form-field> -->\r\n                        \r\n                        <div *ngIf=\"!LoginError\">\r\n                            {{LoginError}}\r\n                          </div>\r\n                          <div fxLayout=\"row\"   class=\"wrapper\">\r\n                              <div fxLayoutAlign=\"center center\" style=\"display: inline-block; font-size: x-small\">\r\n                          <mat-slide-toggle  style=\"color:green;font-size: x-small;\" formControlName=\"rememberMe\">Remember Me</mat-slide-toggle>\r\n                        </div>\r\n                          <div fxLayoutAlign=\"center center\" style=\"display: inline-block; font-size:  x-small;\">\r\n                          <span  (click)=\"openForgotPassDialog(loginForm)\">Forgot Password?</span>\r\n                        </div>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                            <button i18n mat-raised-button\r\n                                    color=\"primary\"\r\n                                    class=\"loginBtn loginBtn--kibsons\"\r\n                                    type=\"submit\">\r\n                                LOGIN\r\n                            </button>\r\n                            <button i18n mat-raised-button\r\n                                    color=\"primary\"\r\n                                    class=\"loginBtn loginBtn--kibsons\"\r\n                                    [routerLink]=\"'/register'\">\r\n                                Register\r\n                            </button>\r\n                        </div>\r\n                        <!-- <div fxLayout=\"column\" >\r\n                            <div  fxLayout=\"column\" fxLayoutAlign=\"center center\" >\r\n                            <h2>(or)</h2>\r\n                            <button style=\"width:225px\" mat-raised-button color=\"primary\" class=\"loginBtn loginBtn--facebook\" (click)=\"tryFacebookLogin();\">Login with Facebook</button>\r\n                            <button style=\"width:225px\" mat-raised-button color=\"primary\" class=\"loginBtn loginBtn--twitter\" (click)=\"tryTwitterLogin();\">Login with Twitter</button>\r\n                            <button style=\"width:225px\" mat-raised-button color=\"primary\" class=\"loginBtn loginBtn--google\" (click)=\"tryGoogleLogin();\">Login with Google</button>\r\n                            </div>\r\n                        </div>               -->\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div fxLayout=\"column\" class=\"p-3\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <h2 i18n>(or)</h2>\r\n                    <br>\r\n                    <button i18n style=\"width: 225px;\"\r\n                            mat-raised-button\r\n                            color=\"primary\"\r\n                            class=\"loginBtn loginBtn--facebook\"\r\n                            (click)=\"tryFacebookLogin()\">\r\n                        Login with Facebook\r\n                    </button>\r\n                    <!-- <button i18n style=\"width: 225px;\"\r\n                            mat-raised-button\r\n                            color=\"primary\"\r\n                            class=\"loginBtn loginBtn--twitter\"\r\n                            (click)=\"tryTwitterLogin()\">\r\n                        Login with Twitter\r\n                    </button> -->\r\n                    <button #googleLoginRef i18n style=\"width: 225px;\" \r\n                            color=\"primary\"\r\n                            class=\"loginBtn loginBtn--google\">\r\n                        Login with Google\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/myitems/myitems.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/myitems/myitems.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product\"  >\n    <div  class=\"kibimgbox\" >\n        <div class=\"primary_image\" >\n            <img  style=\"border-radius: 5px;\"   src=\"{{myCartList?.StockImgLink}}\">  <!-- [class.mat-elevation-z15]=true  -->\n        </div>\n</div>\n    <div class=\"products-name\">{{myCartList?.StockDesc}}</div>\n    <div class=\"product-origin-kib\">{{myCartList?.StockOrigin}}</div>\n   \n\n    <div class=\"product-title\">\n      <span class=\"kib-price\" *ngIf=\"myCartList?.StockOldPrice != 0\" > {{myCartList?.DisplayRate |  number:'1.2-2'}} </span> \n     <span *ngIf=\"myCartList?.StockOldPrice != 0\"><s style=\"color: #a30b33;\"><span class=\"strikeout\">{{myCartList?.StockOldPrice |  number:'1.2-2'}}</span></s> / {{myCartList?.DisplayUnits}}</span>\n     <span *ngIf=\"myCartList?.StockOldPrice == 0\">{{myCartList?.DisplayRate |  number:'1.2-2'}} / {{myCartList?.DisplayUnits}}</span>\n    </div>\n   \n    <div class=\"product-details product-desc-kib space-20\">\n        {{myCartList?.StockDetail1}}\n    </div>\n\n    <div class=\"quantity-box\" fxLayoutAlign=\"center center\">      \n        <button mat-button class=\"btnminus btn-minus-text\" (click)='SubQty(myCartList)'>-</button>\n        <p fxLayoutAlign=\"center center\" class=\"qtyselection\">{{myCartList?.StockCartQty}}</p>\n        <button mat-button class=\"btnplus btn-plus-text\" (click)='AddQty(myCartList)'>+</button>\n    </div>\n   \n    <div style=\"margin:  25px 0px;\" >\n    <mat-divider></mat-divider>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/myshopcart/myshopcart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/myshopcart/myshopcart.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products\" style=\"max-width: 1050px; margin: auto;\"  *ngFor=\"let myshopdata of myShopCartArray\">  <!-- style=\"max-width: 1050px; margin: auto;\" -->\n    <app-myitems [myCartList] = \"myshopdata\"></app-myitems>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mywishlist/mywishlist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mywishlist/mywishlist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products\" style=\"max-width: 1050px; margin: auto;\"  *ngFor=\"let mywishdata of myWishListArray\">  <!-- style=\"max-width: 1050px; margin: auto;\" -->\n    <app-myitems [myCartList] = \"mywishdata\"></app-myitems>\n</div> \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\"  perfectScrollbar (psScrollY)=\"onPsScrollY($event)\" class=\"h-100\">\r\n  <header class=\"header\">  \r\n  <mat-toolbar class=\"top-toolbar\" style=\"background: #0d2c6c;\"  [class.mat-elevation-z]=\"settings.fixedHeader\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxFlex>\r\n      <div class=\"kib-top-header\" fxLayoutAlign=\"center center\">\r\n        <div>\r\n          <div class=\"free-delivery\" fxLayout=\"row wrap\">\r\n            <img\r\n              src=\"assets/img/KB_icons_headerfooter_0014_W_delivery.png\"\r\n            />\r\n            <p>FREE SAME DAY DELIVERY</p>\r\n          </div>\r\n          <div class=\"callus\" fxLayout=\"row wrap\">\r\n            <img\r\n              style=\"display: inline;\"\r\n              \r\n              src=\"assets/img/KB_icons_headerfooter_0002_W_phone.png\"\r\n            />\r\n            <p>800KIBSONS</p>\r\n          </div>\r\n          <div class=\"social-icons2\" fxLayout=\"row wrap\">\r\n            <div>\r\n            <a\r\n              href=\"https://www.facebook.com/kibsons/\"\r\n              title=\"Like our Facebook Page\"\r\n              target=\"_blank\"\r\n            >\r\n              <img  \r\n                src=\"assets/img/KB_icons_headerfooter_0008_W_facebook.png\"\r\n              />\r\n            </a>\r\n            <a\r\n              href=\"https://www.instagram.com/kibsons/\"\r\n              title=\"Follow us in Instagram\"\r\n              target=\"_blank\"\r\n            >\r\n              <img \r\n                src=\"assets/img/KB_icons_headerfooter_0006_W_instagram.png\"\r\n              />\r\n            </a>\r\n          </div>\r\n            <!-- <div>\r\n            <mat-menu #languageMenu=\"matMenu\">\r\n              <ng-template matMenuContent>\r\n                <button style=\"color: #0d2c6c;font-family: Kibfonts;\" mat-menu-item (click)=\"ChangeLang('ar')\">العربية</button>\r\n                <button style=\"color: #0d2c6c;font-family: Kibfonts;\" mat-menu-item (click)=\"ChangeLang('en')\">ENGLISH</button>\r\n              </ng-template>\r\n            </mat-menu> \r\n            <p>\r\n            <button mat-icon-button style=\"font-family: Kibfonts;\" [matMenuTriggerFor]=\"languageMenu\">LANGUAGE</button>   \r\n          </p>    \r\n        </div> -->\r\n            <div style=\"margin: auto;\" >\r\n              <a  href=\"/ar/\" >العربية</a>\r\n            </div>\r\n            <div style=\"margin: auto;\" >\r\n              <a href=\"/en/\">ENGLISH</a>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"top-login\" fxLayout=\"row wrap\">\r\n            <img src=\"assets/img/KB_icons_headerfooter_0016_W_account.png\"/>\r\n            <mat-menu #appMenu=\"matMenu\">\r\n              <ng-template matMenuContent>\r\n                <button style=\"color: #0d2c6c;font-family: Kibfonts;\" mat-menu-item (click)=\"openLogin()\">LOGIN</button>\r\n                <button style=\"color: #0d2c6c;font-family: Kibfonts;\" mat-menu-item (click)=\"openRegister()\">REGISTER</button>\r\n              </ng-template>\r\n            </mat-menu> \r\n            <p>\r\n            <button mat-icon-button style=\"font-family: Kibfonts;\" [matMenuTriggerFor]=\"appMenu\">LOGIN/REGISTER\r\n           </button>   \r\n          </p>    \r\n          </div>\r\n          <div class=\"del-fresh-icon\" fxLayout=\"row wrap\">\r\n            <img src=\"assets/img/en-deliveredFres.jpg\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </mat-toolbar>\r\n\r\n  <div style=\"max-width: 1050px; margin: auto; \" >\r\n   \r\n    <div fxLayoutAlign=\"center\" class=\"pt-2\">\r\n      <div fxLayout=\"row\">\r\n        <img\r\n          src=\"assets/img/logo.png\"\r\n          style=\"height: 80px; width: auto;\"\r\n          class=\"animated-logo\"\r\n        />\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"p-2\" >\r\n          <div  >\r\n\r\n          <mat-form-field style=\"width: 500px;\" appearance=\"outline\">\r\n            <form [formGroup]=\"form\"  #productSeach=\"ngForm\"  >\r\n            <input #searchKibsons style=\"font-size:18px; color: #0d2c6c;\"  matInput placeholder=\"Search in Kibsons.com ...\"matInput [matAutocomplete]=\"auto\" name=\"SearchFieldName\" formControlName=\"SearchFieldName\"  type=\"text\" >\r\n      <mat-autocomplete autoActiveFirstOption  #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n      </mat-autocomplete>\r\n</form>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayoutAlign=\"center\" class=\"pt-1\">\r\n          <button style=\"background-color: #0d2c6c;height: 55px;\" mat-flat-button color=\"warn\">\r\n            <mat-icon>search</mat-icon>\r\n          </button>     \r\n        </div>      \r\n\r\n        <div  fxLayout=\"center center\">\r\n          \r\n          <div  class=\"my-cart-new p-2\">\r\n          <p >AED {{this.CartTotalAmount  |  number:'1.2-2' }}</p>\r\n        </div> \r\n        <div class=\"p-2\">\r\n          <button mat-icon-button color=\"primary\" (click)='openmyshopcart()'>\r\n            <img class=\"favimg\" src=\"assets/images/KB_icons_headerfooter_0009_B_cart.png\">\r\n            <div class=\"cartcount\">\r\n              <span>{{this.CartTotalCount}}</span>\r\n            </div>\r\n            \r\n          </button>\r\n        </div>\r\n        <div class=\"p-2\" >\r\n          <button mat-icon-button color=\"primary\" (click)='openmywishlist()'>\r\n           <img class=\"favimg\"  src=\"assets/images/KB_icons_headerfooter_B_heart.png\">\r\n           <div class=\"favcount\">\r\n            <span>{{this.TotalFavCount}}</span>\r\n          </div>\r\n          </button>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      <div fxLayoutAlign=\"end center\">\r\n        <app-horizontal-menu [menuParentId]=\"0\"> </app-horizontal-menu>\r\n      </div>\r\n  </div>\r\n  \r\n</header>\r\n\r\n     <div  style=\"padding-top: 200px;\">\r\n      <router-outlet></router-outlet> \r\n    </div>\r\n \r\n\r\n \r\n\r\n  <div #backToTop fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n    <mat-icon>arrow_upward</mat-icon>\r\n</div>\r\n  <mat-toolbar class=\"footer\" style=\"background: #0d2c6c;\"  [class.full-width]=\"!showSidenav\">\r\n    <a\r\n      mat-raised-button\r\n      color=\"warn\"\r\n      href=\"https://www.kibsons.com\"\r\n      target=\"_blank\"\r\n    >\r\n      <mat-icon class=\"mx-2\">shopping_cart</mat-icon>Download Kibsons Mobile\r\n      Apps\r\n    </a>\r\n  </mat-toolbar>\r\n</div>\r\n\r\n\r\n\r\n <!-- <div class=\"catimg\"  fxLayoutAlign=\"center center\">\r\n        <img src=\"../../assets/img/catagories/en-h.png\">\r\n        <img src=\"../../assets/img/catagories/en-f.png\">\r\n        <img src=\"../../assets/img/catagories/en-v.png\">\r\n        <img src=\"../../assets/img/catagories/en-s.png\">\r\n        <img src=\"../../assets/img/catagories/en-m.png\">\r\n        <img src=\"../../assets/img/catagories/en-b.png\">\r\n        <img src=\"../../assets/img/catagories/en-d.png\">\r\n        <img src=\"../../assets/img/catagories/en-p.png\">\r\n        <img src=\"../../assets/img/catagories/en-j.png\">\r\n        <imgsrc=\"../../assets/img/catagories/en-g.png\">\r\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/productdetails/productdetails.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/productdetails/productdetails.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>productdetails works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"product\" >\n    <div  class=\"kibimgbox\" >\n        <div class=\"primary_image\" >\n            <img  style=\"border-radius: 5px;\"   [src]=\"stockMaster?.StockImgLink\">  <!-- [class.mat-elevation-z15]=true  -->\n        </div>\n        <div class=\"new-small-icons\">\n            <div class=\"new-ribbon\" *ngIf=\"stockMaster?.category_icon != 'NO'\"  >\n        <img src='assets/images/{{stockMaster?.category_icon}}.png'>\n        </div>  \n        <div class=\"new-ribbon\" *ngIf=\"stockMaster?.featured_icon != 'NO'\" >\n            <img src=\"assets/images/{{stockMaster?.featured_icon}}.png\">\n        </div>\n        <div class=\"new-ribbon\" *ngIf=\"stockMaster?.Meat_icon != 'NO'\" >\n            <img src=\"assets/images/{{stockMaster?.Meat_icon}}.png\">\n        </div>\n       \n        \n</div>  \n<div class=\"preorder-ribbon\" *ngIf=\"stockMaster?.isPromotionText != 'NO'\" >\n    <p>{{stockMaster?.isPromotionText}}</p>\n</div> \n    </div>\n    <div class=\"products-name\">{{stockMaster?.StockDesc}}</div>\n    <div class=\"product-origin-kib\">{{stockMaster?.StockOrigin}}</div>\n   \n\n    <div class=\"product-title\">\n      <span class=\"kib-price\" *ngIf=\"stockMaster?.StockOldPrice != 0\" > {{stockMaster?.DisplayRate |  number:'1.2-2'}} </span> \n     <span *ngIf=\"stockMaster?.StockOldPrice != 0\"><s style=\"color: #a30b33;\"><span class=\"strikeout\">{{stockMaster?.StockOldPrice |  number:'1.2-2'}}</span></s> / {{stockMaster?.DisplayUnits}}</span>\n     <span *ngIf=\"stockMaster?.StockOldPrice == 0\">{{stockMaster?.DisplayRate |  number:'1.2-2'}} / {{stockMaster?.DisplayUnits}}</span>\n    </div>\n\n    <!-- <div class=\"product-title\"  *ngIf=\"stockMaster?.StockOldPrice == 0\" >\n        {{stockMaster?.DisplayRate |  number:'1.2-2'}}/{{stockMaster?.DisplayUnits}}\n    </div> -->\n\n    <div class=\"product-details product-desc-kib space-20\">{{stockMaster?.StockDetail1}}</div>\n\n    <div class=\"quantity-box\" fxLayoutAlign=\"center center\">      \n        <button mat-button class=\"btnminus btn-minus-text\" (click)='SubQty(stockMaster)'>-</button>\n        <p fxLayoutAlign=\"center center\" class=\"qtyselection\">{{stockMaster?.StockCartQty}}</p>\n        <button mat-button class=\"btnplus btn-plus-text\" (click)='AddQty(stockMaster)'>+</button>\n    </div>\n    <div class=\"boxshlist\">\n        <div class=\"wishlist-box wishlist-box-organic\" [ngStyle]=\"{'background-color': stockMaster?.RibbonColor}\">\n            <div class=\"textbox\">\n                <div class=\"wishlist-text\" >\n                   {{stockMaster?.RibbonText}}\n                </div>\n            </div>\n\n            <div class=\"iconbox\">\n                <button id=\"addfavourite_83\"  mat-icon-button (click)='addfav($event);'>\n                    <mat-icon [ngStyle]=\"{'color': myVariableColor}\" class=\"i\" >favorite</mat-icon>\n                </button>\n                <!-- <button id=\"removefavourite_83\"  style=\"padding:0px !important;\" onclick=\"FavouriteManagement('pkt', 'BEEMIAURS200FO', '100', 2243, 'MINUS', 83, 0, 'Ground Beef')\">\n                    <mat-icon style=\"color:#a30b33;\">favorite</mat-icon>\n                </button> -->\n            </div>\n        </div>\n\n    </div>\n    <div style=\"margin:  25px 0px;\" >\n    <mat-divider></mat-divider>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container >\n    <div fxLayout=\"row\"  fxLayoutAlign=\"center center\"  class=\"h-100 p-3\">\n            <form [formGroup]=\"form\"  #loginForm=\"ngForm\"  class=\"mat-elevation-z6\"  (ngSubmit)=\"tryRegister(loginForm)\">\n            <!-- <div fxLayoutAlign=\"end center\">\n                <app-flags-menu ></app-flags-menu>\n            </div>\n            <app-content-header [icon]=\"'exit_to_app'\" [title]=\"'Kibsons Registration'\" [hideBreadcrumb]=\"true\" [hasBgImage]=\"true\" [class]=\"'py-4'\">\n            </app-content-header>              -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\"  class=\"p-3\">\n<div>\n    <div fxLayout=\"row\">\n        <mat-form-field  appearance=\"outline\" >\n            <mat-label>First Name</mat-label>\n            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">perm_identity</mat-icon>\n            <input matInput placeholder=\"First Name\" formControlName=\"firstname\">\n            <mat-error *ngIf=\"form.controls.firstname.errors?.required\">First Name is required</mat-error>            \n            <mat-error *ngIf=\"form.controls.firstname.hasError('invalidalphabet')\">Only Alphabets</mat-error>\n        </mat-form-field>\n        <mat-form-field  appearance=\"outline\" >\n            <mat-label>Last Name</mat-label>\n            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">perm_identity</mat-icon>\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastname\">\n            <mat-error *ngIf=\"form.controls.lastname.errors?.required\">Last Name is required</mat-error>      \n            <mat-error *ngIf=\"form.controls.lastname.hasError('invalidalphabet')\">Only Alphabets</mat-error>\n            <!-- <mat-hint>Last Name</mat-hint> -->\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"row\">\n    <mat-form-field  appearance=\"outline\" >\n        <mat-label>Email</mat-label>\n        <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">email</mat-icon>\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\n        <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\n        <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n        <!-- <mat-hint>Registered Email</mat-hint> -->\n    </mat-form-field>\n    </div>\n    <div fxLayout=\"row\">\n        <div fxLayout=\"row\">\n        <mat-form-field  appearance=\"outline\" >\n            <mat-label>Cell Phone</mat-label>\n            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">smartphone</mat-icon>\n            <input matInput placeholder=\"Cell Phone\" formControlName=\"cellphone\">\n            <mat-error *ngIf=\"form.controls.cellphone.errors?.required\">Cell Phone Number is required</mat-error>\n            <mat-error *ngIf=\"form.controls.cellphone.hasError('invalidCellPhone')\">Invalid Cell Phone Number</mat-error>\n            <!-- <mat-hint>Cell Phone Number</mat-hint> -->\n        </mat-form-field> \n        <button mat-fab color=\"primary\"  [disabled]=\"!btnOTP\" aria-label=\"Example icon button with a delete icon\" (click)=\"sendOTP()\">\n            <mat-label>OTP</mat-label>\n          </button>\n          </div>\n        <mat-form-field  appearance=\"outline\" >\n            <mat-label>Verfication Code</mat-label>\n            <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">verified_user</mat-icon>\n            <input  mat-Badge=\"X\" matBadgeColor=\"warn\" matInput placeholder=\"Verification Code\" formControlName=\"verificationcode\" (blur)=\"onBlur($event)\">\n            <!-- <mat-hint>Registered Email</mat-hint> -->\n        </mat-form-field>\n\n    </div>\n</div>\n\n<mat-divider vertical=\"true\" inset=\"false\"></mat-divider>\n<div>\n\n           <div fxLayout=\"row\" >\n                <mat-form-field  appearance=\"outline\" >\n                    <mat-label>Date of Birth</mat-label>\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"dob\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n                    <!-- <mat-error *ngIf=\"form.controls.dob.errors?.required\">Date of Birth is required</mat-error> -->\n                    <!-- <mat-error *ngIf=\"form.controls.dob.hasError('invalidDate')\">Invalid Date Format</mat-error> -->\n                    <mat-hint>Date of Birth</mat-hint>\n                </mat-form-field>\n\n\n                <mat-form-field  appearance=\"outline\" >\n                    <mat-label>Gender</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">wc</mat-icon>\n                    <mat-select formControlName=\"gender\">\n                      <mat-option>--</mat-option>\n                      <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender.name}}   </mat-option>\n                    </mat-select>\n                    <mat-hint>Gender</mat-hint>\n                </mat-form-field>\n\n                </div>\n                <div fxLayout=\"row\">\n                <mat-form-field  appearance=\"outline\" >\n                    <mat-label>Nationality</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">outlined_flag</mat-icon>\n                    <input matInput placeholder=\"nationality\" formControlName=\"nationality\">\n                    <mat-error *ngIf=\"form.controls.email.errors?.required\">Nationality is required</mat-error>\n                    <mat-hint>Nationality</mat-hint>\n                </mat-form-field>\n            </div>  \n                <div fxLayout=\"row\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Password</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\n                    <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\n                    <mat-hint>Login Password</mat-hint>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Confirm Password</mat-label>\n                    <mat-icon matPrefix class=\"mat-icon-sm mb-2 mr-2 secondary-text-color\">lock</mat-icon>\n                    <input matInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirmpassword\">    \n                    <mat-error *ngIf=\"form.controls.confirmpassword.errors?.required\">Confirm Password is required</mat-error>\n                    <mat-error *ngIf=\"form.controls.confirmpassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\n                    <mat-hint>Re-enter Password</mat-hint>\n                </mat-form-field>\n               </div>\n            </div>\n\n        </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"center\"  class=\"p-3\">\n                    <button mat-raised-button color=\"primary\"    >Clear Form</button> \n                    <button mat-raised-button color=\"primary\" class=\"loginBtn loginBtn--kibsons\" type=\"submit\">Register User</button> \n                </div>     \n\n        </form>\n    </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shopping/shopping.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shopping/shopping.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--   \n  <div fxLayoutAlign=\"center\" style=\"max-width: 1050px; margin: auto;\" class=\"products\" *ngFor=\"let data of ProductsArry\">\n    <app-products [stockMaster] = \"data\"></app-products>\n  </div> -->\n  <!--  -->\n  <div class=\"products\" style=\"max-width: 1050px;margin: auto;\"  *ngFor=\"let data of ProductsArry\"  >  <!-- style=\"max-width: 1050px; margin: auto;\" -->\n <app-products [stockMaster] = \"data\"></app-products>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test/test.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test/test.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  fxLayoutAlign=\"center\" class=\"mat-elevation-z8\">\n\n  <div >\n    <table mat-table\n    [dataSource]=\"dataSource\" multiTemplateDataRows\n    >\n<ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n</ng-container>\n\n<!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n<ng-container matColumnDef=\"expandedDetail\">\n <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n   <div class=\"example-element-detail\"\n        [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n     <div class=\"example-element-diagram\">\n       <div class=\"example-element-position\"> {{element.position}} </div>\n       <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n       <div class=\"example-element-name\"> {{element.name}} </div>\n       <div class=\"example-element-weight\"> {{element.weight}} </div>\n     </div>\n     <div class=\"example-element-description\">\n       {{element.description}}\n       <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n     </div>\n   </div>\n </td>\n \n</ng-container>\n\n<tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n<tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n   class=\"example-element-row\"\n   [class.example-expanded-row]=\"expandedElement === element\"\n   (click)=\"expandedElement = element\">\n</tr>\n<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\nclass=\"example-detail-row\"></tr>\n</table>\n  </div>\n</div>\n\n\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"breadcrumb p-2\">\r\n    <a routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n        <mat-icon>home</mat-icon>\r\n        <span class=\"breadcrumb-title\">Home</span>\r\n    </a>\r\n    <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n        <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/content-header/content-header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/content-header/content-header.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"content-header bg-primary\" [class.bg-image]=\"hasBgImage\" [ngClass]=\"class\">  \r\n  <app-breadcrumb [hidden]=\"hideBreadcrumb\"></app-breadcrumb>\r\n  <!-- <mat-icon *ngIf=\"icon\" class=\"mat-icon-xlg\">{{icon}}</mat-icon> -->\r\n  <h1 i18n=\"main header|Friendly welcoming message\" *ngIf=\"title\">{{title}}</h1>\r\n  <!-- <h4 *ngIf=\"desc\" class=\"p-2\">{{desc}}</h4> -->\r\n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/snack-bar/snack-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/snack-bar/snack-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-header \n    [icon]=\"'sms'\" \n    [title]=\"'Snackbar'\" \n    [hideBreadcrumb]=\"false\"\n    [hasBgImage]=\"true\" \n    [class]=\"'pb-4'\"></app-content-header>\n\n<div fxLayout=\"column\" class=\"p-2\">\n    <div class=\"p-2\">\n        <mat-card>\n            <mat-card-header>                \n                <mat-card-subtitle><h2>Snackbar Overview</h2></mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-form-field>\n                  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n                </mat-form-field>\n                <button mat-button color=\"primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/applications/applications.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/applications/applications.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-purple\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-indigo\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-blue\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-orange\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-green\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-pink\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-brown\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-red\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"gradient-gray\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/flags-menu/flags-menu.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/flags-menu/flags-menu.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\r\n  mat-icon-button\r\n  [matMenuTriggerFor]=\"flagsMenu\"\r\n  #flagsMenuTrigger=\"matMenuTrigger\"\r\n>\r\n  <mat-icon color=\"primary\">language</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu\r\n  #flagsMenu=\"matMenu\"\r\n  [overlapTrigger]=\"false\"\r\n  class=\"toolbar-dropdown-menu flags\"\r\n>\r\n  <span fxLayout=\"column\" (mouseleave)=\"flagsMenuTrigger.closeMenu()\">\r\n\r\n    <!-- <a mat-button href=\"/en/\">\r\n        <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\" />\r\n        English</a>\r\n\r\n    <a mat-button href=\"/ar/\">\r\n      <img src=\"assets/img/flags/ar.svg\" width=\"20\" alt=\"arabic\" />\r\n      Arabic</a> -->\r\n        <!-- <button  href=\"/en/\" (click)=\"changeLanguage('/en/',false)\" mat-menu-item>\r\n      <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\" />\r\n      English\r\n    </button>\r\n        <button  href=\"/ar/\" (click)=\"changeLanguage('/ar/',true)\" mat-menu-item>\r\n            <img src=\"assets/img/flags/ar.svg\" width=\"20\" alt=\"arabic\"> \r\n            Arabic\r\n        </button> -->\r\n     <a mat-button href=\"/en/\">\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n          </a>  \r\n        <a mat-button href=\"/ar/\">\r\n            <img src=\"assets/img/flags/ar.svg\"  width=\"20\" alt=\"arabic\"> \r\n            Arabic\r\n          </a> \r\n    <!-- <button mat-menu-item> \r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button> -->\r\n  </span>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"center center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button [class.parent-item]=\"menuParentId == 0\"\r\n            fxLayout=\"row\" fxLayoutAlign=\"(menuParentId == 0) ? 'center center' : 'start center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <!-- <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon> -->\r\n            <span class=\"horizontal-menu-item\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button [class.parent-item]=\"menuParentId == 0\"\r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(menuParentId == 0) ? 'center center' : 'start center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <!-- <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon> -->\r\n            <span class=\"horizontal-menu-item\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button [class.parent-item]=\"menuParentId == 0\"\r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(menuParentId == 0) ? 'center center' : 'start center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <!-- <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon> -->\r\n            <span class=\"horizontal-menu-item\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu mat-elevation-z1\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/sidenav/sidenav.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/sidenav/sidenav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-menu-outer\" [perfectScrollbar]=\"psConfig\" [disabled]=\"settings.fixedSidenavUserContent\">    \r\n    <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block\" [class.py-3]=\"settings.menuType != 'mini'\" [class.py-2]=\"settings.menuType == 'mini'\">\r\n        <img src=\"assets/img/users/user.jpg\" alt=\"user-image\">\r\n        <h2 *ngIf=\"settings.menuType != 'mini'\" class=\"mt-2\">Firas Sinno</h2>\r\n        <p *ngIf=\"settings.menuType == 'default'\" class=\"secondary-text-color\">user@mailserver.com</p>\r\n    </div>\r\n    <mat-divider></mat-divider> -->\r\n    <div id=\"vertical-menu\" [perfectScrollbar]=\"psConfig\" [disabled]=\"!settings.fixedSidenavUserContent\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/user-menu/user-menu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/user-menu/user-menu.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button> -->\r\n\r\n<!-- <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n     \r\n        <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info p-0\">\r\n            <img [src]=\"user.image\" *ngIf=\"user.image\" alt=\"user-image\">\r\n            <img src=\"https://via.placeholder.com/400x300\" *ngIf=\"!user.image\" alt=\"user-image\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h2>{{user.firstname}} {{user.lastname}}</h2>\r\n                <h3 class=\"secondary-text-color\">{{user.email}}</h3>\r\n                <p class=\"secondary-text-color\">{{user.provider}}</p>\r\n            </div>\r\n        </mat-card>  \r\n        <mat-divider ></mat-divider>\r\n        <a mat-menu-item routerLink=\"profile\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"settings\"> \r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/lockscreen\"> \r\n            <mat-icon>lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <mat-divider></mat-divider>\r\n        <a mat-menu-item  routerLink=\"/login\"> \r\n            <a mat-menu-item  (click)=\"logout()\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    </span>\r\n</mat-menu> -->"

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    if (!canPatchViaPropertyDescriptor(api, _global)) {
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
        // try to use onclick to detect whether we can patch via propertyDescriptor
        // because XMLHttpRequest is not available in service worker
        if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n#app-spinner.hide {\n  visibility: hidden;\n  opacity: 0;\n}\n#app-spinner h4 {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n#app-spinner img.animated-logo {\n  -webkit-animation: rotation 2s infinite linear;\n  animation: rotation 2s infinite linear;\n}\n@keyframes rotation {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUdBLGdEQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBR0Esb0VBQUE7RUFDQSw0REFBQTtBQ0FSO0FER0k7RUFHSSw4Q0FBQTtFQUNBLHNDQUFBO0FDRFI7QURNQTtFQUNJO0lBQ0kseUJBQUE7RUNITjtBQUNGO0FEWUE7RUFDSTtJQUNJLGlDQUFBO0VDTE47QUFDRjtBRGVBO0VBQ0k7SUFDSSxVQUFBO0VDUk47RURXRTtJQUNJLFVBQUE7RUNUTjtFRFlFO0lBQ0ksVUFBQTtFQ1ZOO0VEYUU7SUFDSSxVQUFBO0VDWE47QUFDRjtBRGdDQTtFQUNJO0lBQ0ksVUFBQTtFQ2hCTjtFRG1CRTtJQUNJLFVBQUE7RUNqQk47RURvQkU7SUFDSSxVQUFBO0VDbEJOO0VEcUJFO0lBQ0ksVUFBQTtFQ25CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG5cclxuICAgICYuaGlkZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcuYW5pbWF0ZWQtbG9nbyB7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAtby1hbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuXHJcbiAgICAyMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufSIsIiNhcHAtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuI2FwcC1zcGlubmVyLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4jYXBwLXNwaW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xufVxuI2FwcC1zcGlubmVyIGltZy5hbmltYXRlZC1sb2dvIHtcbiAgLW1vei1hbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLW8tYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcm90YXRpb24ge1xuICAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.fbLibrary();
    };
    AppComponent.prototype.fbLibrary = function () {
        window.fbAsyncInit = function () {
            window['FB'].init({
                appId: '259168315327232',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });
            window['FB'].AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    AppComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/environment-url.service */ "./src/app/shared/services/environment-url.service.ts");
/* harmony import */ var _shared_services_repository_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/repository.service */ "./src/app/shared/services/repository.service.ts");
/* harmony import */ var _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
/* harmony import */ var _shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/notifyscroll.service */ "./src/app/shared/services/notifyscroll.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./src/app/pages/errors/error/error.component.ts");
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theme/components/sidenav/sidenav.component */ "./src/app/theme/components/sidenav/sidenav.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_ar_AE__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/locales/ar-AE */ "./node_modules/@angular/common/locales/ar-AE.js");
/* harmony import */ var _angular_common_locales_ar_AE__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ar_AE__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _angular_common_locales_extra_ar_AE__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common/locales/extra/ar-AE */ "./node_modules/@angular/common/locales/extra/ar-AE.js");
/* harmony import */ var _angular_common_locales_extra_ar_AE__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_ar_AE__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/test/test.component */ "./src/app/pages/test/test.component.ts");
/* harmony import */ var _guards_auth_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./guards/auth.service */ "./src/app/guards/auth.service.ts");
/* harmony import */ var _guards_user_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./guards/user.service */ "./src/app/guards/user.service.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _guards_useremail_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./guards/useremail.service */ "./src/app/guards/useremail.service.ts");
/* harmony import */ var _pages_deliverylocation_deliverylocation_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/deliverylocation/deliverylocation.component */ "./src/app/pages/deliverylocation/deliverylocation.component.ts");
/* harmony import */ var _pages_addressdetails_addressdetails_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/addressdetails/addressdetails.component */ "./src/app/pages/addressdetails/addressdetails.component.ts");
/* harmony import */ var _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/shopping/shopping.component */ "./src/app/pages/shopping/shopping.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/productdetails/productdetails.component */ "./src/app/pages/productdetails/productdetails.component.ts");
/* harmony import */ var _pages_mywishlist_mywishlist_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/mywishlist/mywishlist.component */ "./src/app/pages/mywishlist/mywishlist.component.ts");
/* harmony import */ var _pages_myshopcart_myshopcart_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/myshopcart/myshopcart.component */ "./src/app/pages/myshopcart/myshopcart.component.ts");
/* harmony import */ var _pages_myitems_myitems_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/myitems/myitems.component */ "./src/app/pages/myitems/myitems.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































Object(_angular_common__WEBPACK_IMPORTED_MODULE_38__["registerLocaleData"])(_angular_common_locales_ar_AE__WEBPACK_IMPORTED_MODULE_39___default.a, 'ar-AE', _angular_common_locales_extra_ar_AE__WEBPACK_IMPORTED_MODULE_40___default.a);














var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
// provider: new GoogleLoginProvider("765623504677-7ikt7igooq72ksqbk02u3rcs5q6jvcmq.apps.googleusercontent.com")
// provider: new FacebookLoginProvider("259168315327232")
function tokenGetter() {
    return localStorage.getItem("jwt");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_16__["routing"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_36__["InfiniteScrollModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_37__["NgxSpinnerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ["localhost:5000", 'https://kibsonsit.github.io/kibsons/'],
                        blacklistedRoutes: []
                    }
                }),
                // GoogleMapsModule
                _agm_core__WEBPACK_IMPORTED_MODULE_35__["AgmCoreModule"].forRoot({
                    // apiKey: 'AIzaSyCJJyHVxPiA4OvqD4Qbvu5wxSoyurW00cg',
                    apiKey: 'AIzaSyCJJyHVxPiA4OvqD4Qbvu5wxSoyurW00cg',
                    language: 'en',
                    libraries: ['places']
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_23__["PagesComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_44__["LoginComponent"],
                _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_24__["BlankComponent"],
                _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_25__["NotFoundComponent"],
                _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_26__["ErrorComponent"],
                _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__["SidenavComponent"],
                _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_28__["VerticalMenuComponent"],
                _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_29__["HorizontalMenuComponent"],
                _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_30__["FlagsMenuComponent"],
                _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_31__["FullScreenComponent"],
                _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_32__["ApplicationsComponent"],
                _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_33__["UserMenuComponent"],
                _pages_test_test_component__WEBPACK_IMPORTED_MODULE_41__["TestComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_45__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_44__["DialogForgotPass"],
                _pages_deliverylocation_deliverylocation_component__WEBPACK_IMPORTED_MODULE_47__["DeliverylocationComponent"],
                _pages_addressdetails_addressdetails_component__WEBPACK_IMPORTED_MODULE_48__["AddressdetailsComponent"],
                _pages_addressdetails_addressdetails_component__WEBPACK_IMPORTED_MODULE_48__["DialogOpenMap"],
                _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_49__["ShoppingComponent"],
                _pages_products_products_component__WEBPACK_IMPORTED_MODULE_50__["ProductsComponent"],
                _pages_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_51__["ProductDetailsComponent"],
                _pages_myshopcart_myshopcart_component__WEBPACK_IMPORTED_MODULE_53__["MyShopCartComponent"],
                _pages_mywishlist_mywishlist_component__WEBPACK_IMPORTED_MODULE_52__["MyWishListComponent"],
                _pages_myitems_myitems_component__WEBPACK_IMPORTED_MODULE_54__["MyitemsComponent"]
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_21__["AppSettings"],
                _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                _guards_auth_service__WEBPACK_IMPORTED_MODULE_42__["AuthService"],
                _guards_user_service__WEBPACK_IMPORTED_MODULE_43__["UserService"],
                _shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_17__["EnvironmentUrlService"],
                _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_19__["NavigateService"],
                _shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_20__["NotifyScrollService"],
                _guards_useremail_service__WEBPACK_IMPORTED_MODULE_46__["UseremailValidator"],
                _shared_services_repository_service__WEBPACK_IMPORTED_MODULE_18__["RepositoryService"],
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_6__["CustomOverlayContainer"] }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_44__["DialogForgotPass"], _pages_addressdetails_addressdetails_component__WEBPACK_IMPORTED_MODULE_48__["DialogOpenMap"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

// platformBrowserDynamic().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./src/app/pages/errors/error/error.component.ts");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/test/test.component */ "./src/app/pages/test/test.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_addressdetails_addressdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/addressdetails/addressdetails.component */ "./src/app/pages/addressdetails/addressdetails.component.ts");
/* harmony import */ var _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/shopping/shopping.component */ "./src/app/pages/shopping/shopping.component.ts");
/* harmony import */ var _pages_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/productdetails/productdetails.component */ "./src/app/pages/productdetails/productdetails.component.ts");
/* harmony import */ var _pages_mywishlist_mywishlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/mywishlist/mywishlist.component */ "./src/app/pages/mywishlist/mywishlist.component.ts");
/* harmony import */ var _pages_myshopcart_myshopcart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/myshopcart/myshopcart.component */ "./src/app/pages/myshopcart/myshopcart.component.ts");














var routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"], children: [
            { path: 'address', component: _pages_addressdetails_addressdetails_component__WEBPACK_IMPORTED_MODULE_9__["AddressdetailsComponent"], data: { breadcrumb: 'Address Details' } },
            // { path: 'test', component: TestComponent, data: { breadcrumb: 'Test' } },
            { path: 'shopping', component: _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingComponent"], data: { breadcrumb: 'Shopping', PageScrolled: false } },
            { path: '', component: _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingComponent"], data: { breadcrumb: 'Shopping' } },
            { path: 'myshopcart', component: _pages_myshopcart_myshopcart_component__WEBPACK_IMPORTED_MODULE_13__["MyShopCartComponent"], data: { breadcrumb: 'My Shopping Cart' } },
            { path: 'mywishlist', component: _pages_mywishlist_mywishlist_component__WEBPACK_IMPORTED_MODULE_12__["MyWishListComponent"], data: { breadcrumb: 'My Wish List' } },
            { path: 'productdetails', component: _pages_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsComponent"], data: { breadcrumb: 'Product Details' } },
            { path: 'blank', component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]] },
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], data: { breadcrumb: 'Login page' } },
            { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], data: { breadcrumb: 'User Registration page' } },
        ]
    },
    // { path: 'login', component: LoginComponent ,  data: { breadcrumb: 'Login page' } },
    // { path: 'register', component: RegisterComponent ,  data: { breadcrumb: 'User Registration page' } },
    { path: 'error', component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], data: { breadcrumb: 'Error' } },
    { path: 'test', component: _pages_test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"], data: { breadcrumb: 'Test' } },
    { path: '**', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {});


/***/ }),

/***/ "./src/app/app.settings.model.ts":
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings(name, loadingSpinner, fixedHeader, fixedSidenav, fixedSidenavUserContent, fixedFooter, sidenavIsOpened, sidenavIsPinned, menu, menuType, theme, rtl) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.fixedSidenav = fixedSidenav;
        this.fixedSidenavUserContent = fixedSidenavUserContent;
        this.fixedFooter = fixedFooter;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
    }
    Settings.ctorParameters = function () { return [
        { type: String },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return Settings;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings.model */ "./src/app/app.settings.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('KibsonsWEB', // theme name
        false, // loadingSpinner
        true, // fixedHeader
        true, // fixedSidenav
        false, // fixedSidenavUserContent
        false, // fixedFooter
        false, // sidenavIsOpened
        false, // sidenavIsPinned
        'horizontal', // horizontal , vertical
        'default', // default, compact, mini
        'indigo-light', // indigo-light, teal-light, red-light, gray-light, blue-dark, green-dark, pink-dark, gray-dark
        false // true = rtl, false = ltr
        );
    }
    AppSettings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(jwtHelper, router, navigateservice) {
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.navigateservice = navigateservice;
    }
    AuthGuardService.prototype.canActivate = function () {
        var token = localStorage.getItem('jwt');
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        if (localStorage.getItem('FaceBookSocialUser')) {
            return true;
        }
        // const socialToken =   localStorage.getItem('SocialUser'); 
        // if ( socialToken ) {
        if (localStorage.getItem('GoogleSocialUser')) {
            return true;
        }
        this.navigateservice.navigateTo('login');
        //  this.router.navigate(['login']);
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/guards/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/guards/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/environment-url.service */ "./src/app/shared/services/environment-url.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.model */ "./src/app/guards/user.model.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(router, http, jwtHelper, envUrl) {
        this.router = router;
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.envUrl = envUrl;
    }
    AuthService.prototype.getCurrentUser = function () {
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_4__["KibsonsWEBUserModel"]("", "", "", "", "", "");
        var token = localStorage.getItem("jwt");
        var googleSocialToken = localStorage.getItem("GoogleSocialUser");
        var facebookSocialToken = localStorage.getItem("FaceBookSocialUser");
        if (token) {
            // user = JSON.parse(localStorage.getItem('jwt'));
            user.email = this.jwtHelper.decodeToken(token).user_email;
            user.firstname = this.jwtHelper.decodeToken(token).user_firstname;
            user.lastname = this.jwtHelper.decodeToken(token).user_lastname;
            user.provider = "Kibsons Login API";
            user.image = this.jwtHelper.decodeToken(token).user_photo;
            user.usermasterid = this.jwtHelper.decodeToken(token).user_masterid;
            //this.user.image = "";
        }
        else if (facebookSocialToken) {
            this.user = JSON.parse(facebookSocialToken);
        }
        else if (googleSocialToken) {
            this.user = JSON.parse(googleSocialToken);
        }
        else {
            return this.user;
        }
    };
    AuthService.prototype.isSignedIn = function () {
        return this.getCurrentUser() != null;
    };
    AuthService.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googleAuth.signIn({
                // Show the prompt
                'prompt': 'consent'
            }).then(function (googleUser) {
                // Get Google ID token
                var token = googleUser.getAuthResponse().id_token;
                // Sign in with the back-end service
                _this.http.post(_this.envUrl.urlAddress + '/kibsonsapi/socialsignin', null, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', token)
                }).subscribe(function (res) {
                    var profile = googleUser.getBasicProfile();
                    // Create the user
                    _this.user = new _user_model__WEBPACK_IMPORTED_MODULE_4__["KibsonsWEBUserModel"](res.userId, res.sessionToken, profile.getName(), "", "", "");
                    // Save the user to local storage
                    localStorage.setItem('user', JSON.stringify(_this.user));
                    resolve(_this.user);
                }, reject);
            }, reject);
        });
    };
    AuthService.prototype.validateUseremail = function (useremail) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("emailid", useremail);
        return this.http.get(this.envUrl.urlAddress + '/kibsonsapi/checkEmail', { params: params });
        // .pipe(map(data => data))
        // return this.http.get(this.envUrl.urlAddress + 'auth/validate-username/' + useremail).map(res => res.json());
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] },
        { type: _shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentUrlService"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"],
            _shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentUrlService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/guards/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/guards/user.model.ts ***!
  \**************************************/
/*! exports provided: KibsonsWEBUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibsonsWEBUserModel", function() { return KibsonsWEBUserModel; });
var KibsonsWEBUserModel = /** @class */ (function () {
    function KibsonsWEBUserModel(image, firstname, lastname, provider, email, usermasterid) {
        this.image = image;
        this.firstname = firstname;
        this.lastname = lastname;
        this.provider = provider;
        this.email = email;
        this.usermasterid = usermasterid;
    }
    KibsonsWEBUserModel.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return KibsonsWEBUserModel;
}());



/***/ }),

/***/ "./src/app/guards/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/guards/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.model */ "./src/app/guards/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import 'rxjs/add/operator/toPromise';



var UserService = /** @class */ (function () {
    function UserService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    UserService.prototype.getCurrentUser = function () {
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["KibsonsWEBUserModel"]("", "", "", "", "", "");
        var token = localStorage.getItem("jwt");
        var googleSocialToken = localStorage.getItem("GoogleSocialUser");
        var facebookSocialToken = localStorage.getItem("FaceBookSocialUser");
        if (token) {
            // user = JSON.parse(localStorage.getItem('jwt'));
            user.email = this.jwtHelper.decodeToken(token).user_email;
            user.firstname = this.jwtHelper.decodeToken(token).user_firstname;
            user.lastname = this.jwtHelper.decodeToken(token).user_lastname;
            user.provider = "KIBSONS Login API";
            // user.image= this.jwtHelper.decodeToken(token).user_photo;
            user.image = "";
            user.usermasterid = this.jwtHelper.decodeToken(token).user_masterid;
        }
        else if (facebookSocialToken) {
            console.log(JSON.parse(localStorage.getItem("FaceBookSocialUser")));
            user.email = JSON.parse(facebookSocialToken).email;
            user.firstname = JSON.parse(facebookSocialToken).first_name;
            user.lastname = JSON.parse(facebookSocialToken).last_name;
            user.provider = "FACEBOOK Login API";
            user.image = JSON.parse(facebookSocialToken).picture.data.url;
        }
        else if (googleSocialToken) {
            console.log(JSON.parse(localStorage.getItem("GoogleSocialUser")));
            user.email = JSON.parse(googleSocialToken).Du;
            user.firstname = JSON.parse(googleSocialToken).sW;
            user.lastname = JSON.parse(googleSocialToken).tU;
            user.provider = "GOOGLE Login API";
            user.image = JSON.parse(googleSocialToken).SK;
        }
        return user;
    };
    UserService.prototype.isSignedIn = function () {
        return this.getCurrentUser != null;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/guards/useremail.service.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/useremail.service.ts ***!
  \*********************************************/
/*! exports provided: UseremailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseremailValidator", function() { return UseremailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth.service */ "./src/app/guards/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UseremailValidator = /** @class */ (function () {
    function UseremailValidator(authService, snackBar) {
        this.authService = authService;
        this.snackBar = snackBar;
    }
    UseremailValidator.prototype.checkUserEmail = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.authService.validateUseremail(control.value).subscribe(function (res) {
                    if (res) {
                        resolve(null);
                    }
                }, function (err) {
                    _this.snackBar.open("Email Already Registered !!!", "EMail Verification", {
                        duration: 5000,
                    });
                    resolve({ 'usernameInUse': true });
                });
            }, 1000);
        });
    };
    UseremailValidator.ctorParameters = function () { return [
        { type: _guards_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    UseremailValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_guards_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UseremailValidator);
    return UseremailValidator;
}());



/***/ }),

/***/ "./src/app/pages/addressdetails/addressdetails.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/addressdetails/addressdetails.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 500px;\n  width: 800px;\n}\n\n.mat-form-field {\n  margin: 5px;\n}\n\n.mat-table__wrapper .mat-table {\n  min-width: auto !important;\n  width: 100% !important;\n}\n\n.mat-header-row {\n  width: 100%;\n}\n\n.mat-row {\n  width: 100%;\n}\n\n.mat-column-slno {\n  text-align: center;\n  flex: 0 0 15% !important;\n}\n\n.mat-column-addresstitle {\n  text-align: left;\n  flex: 0 0 15% !important;\n}\n\n.mat-column-county {\n  text-align: left;\n  flex: 0 0 15% !important;\n}\n\n.mat-column-area {\n  text-align: left;\n  flex: 0 0 15% !important;\n}\n\n.mat-column-address {\n  text-align: left;\n  flex: 0 0 15% !important;\n}\n\n.mat-column-landmark {\n  text-align: left;\n  flex: 0 0 1 5% !important;\n}\n\n.element-row:hover {\n  background: #f5f5f5;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.element-row {\n  position: relative;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzc2RldGFpbHMvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxccGFnZXNcXGFkZHJlc3NkZXRhaWxzXFxhZGRyZXNzZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkcmVzc2RldGFpbHMvYWRkcmVzc2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENFO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0dKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRyZXNzZGV0YWlscy9hZGRyZXNzZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYmxlX193cmFwcGVyIC5tYXQtdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtY29sdW1uLXNsbm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWluLXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jb2x1bW4tYWRkcmVzc3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtaW4td2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jb2x1bW4tY291bnR5IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtaW4td2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jb2x1bW4tYXJlYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWluLXdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY29sdW1uLWFkZHJlc3Mge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIC8vIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWNvbHVtbi1sYW5kbWFyayB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleDogMCAwIDEgNSUgIWltcG9ydGFudDtcclxuICAgIC8vIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4uZWxlbWVudC1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmVsZW1lbnQtcm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAiLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW46IDVweDtcbn1cblxuLm1hdC10YWJsZV9fd3JhcHBlciAubWF0LXRhYmxlIHtcbiAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNvbHVtbi1zbG5vIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFkZHJlc3N0aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tY291bnR5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1hcmVhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1hZGRyZXNzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1sYW5kbWFyayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsZXg6IDAgMCAxIDUlICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVtZW50LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5lbGVtZW50LXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/addressdetails/addressdetails.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/addressdetails/addressdetails.component.ts ***!
  \******************************************************************/
/*! exports provided: AddressdetailsComponent, DialogOpenMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressdetailsComponent", function() { return AddressdetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOpenMap", function() { return DialogOpenMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/environment-url.service */ "./src/app/shared/services/environment-url.service.ts");
/* harmony import */ var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
/* harmony import */ var src_app_guards_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/guards/user.service */ "./src/app/guards/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










// const AddressDetails_DATA: AddressDetails[] = [
//   {  
//     slno: 1,
//       AddressTitle: "Home Address",
//       County: "DUBAI",
//       Area: "Ras AlKhor",
//       Address1: "No:59, Market",
//       Address2: "Phase - II",
//       Landmark: "Behind Union CO-OP",
//     Latitude:"12.032541",
//   Longitude:"1.021322",
//   AutoID:1,
//   UserMasterID:"0"
// },
// {  
//   slno: 2,
//     AddressTitle: "Office Address",
//     County: "Abu Dhabi",
//     Area: "Al Muneera",
//     Address1: "Max Office Buildings",
//     Address2: "Phase - B",
//     Landmark: "Behind Mucipality",
//   Latitude:"13.032541",
// Longitude:"7.021322",
// AutoID:2,
// UserMasterID:"0"
// }
// ];
var AddressdetailsComponent = /** @class */ (function () {
    function AddressdetailsComponent(googlemapdialog, appSettings, fb, http, envUrl, snackBar, userService, navigateservice) {
        this.googlemapdialog = googlemapdialog;
        this.appSettings = appSettings;
        this.fb = fb;
        this.http = http;
        this.envUrl = envUrl;
        this.snackBar = snackBar;
        this.userService = userService;
        this.navigateservice = navigateservice;
        this.addressdetailcolumns = ["slno", "addresstitle", "county", "area", "address", "landmark"];
        this.dsaddressdetails = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.submitted = false;
        this.UpdateDisabled = false;
        this.AddDisabled = true;
        // myControl = new FormControl();
        // myControl1 = new FormControl();
        this.options = ['Abu Dhabi', 'Abu Dhabi - Al Ruwais', 'Ajman', 'Al Ain', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Um Al Quaian'];
        this.options1 = ['1 Abu Dhabi', '2 Abu Dhabi - Al Ruwais', '3 Ajman', '4 Al Ain', '5 Dubai', '6 Fujairah', '7 Ras Al Khaimah', '8 Sharjah', '9 Um Al Quaian'];
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            addresstitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            county: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            area: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            landmark: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            latitude: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            longitude: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    AddressdetailsComponent.prototype.ngOnInit = function () {
        // this.myControl.valueChanges
        this.user = this.userService.getCurrentUser();
        this.autocompletereset();
    };
    AddressdetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loadAddressDetails();
        this.autoTrigger.panelClosingActions.subscribe(function (x) {
            if (_this.autoTrigger.activeOption) {
                console.log(_this.autoTrigger.activeOption.value);
                // this.myControl.setValue(this.autoTrigger.activeOption.value)
                _this.form.controls['county'].setValue(_this.autoTrigger.activeOption.value);
            }
        });
        this.autoTrigger1.panelClosingActions.subscribe(function (x) {
            if (_this.autoTrigger1.activeOption) {
                console.log(_this.autoTrigger1.activeOption.value);
                // this.myControl1.setValue(this.autoTrigger1.activeOption.value)
                _this.form.controls['area'].setValue(_this.autoTrigger1.activeOption.value);
            }
        });
    };
    AddressdetailsComponent.prototype.autocompletereset = function () {
        var _this = this;
        this.filteredOptions = this.form.controls.county.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._filter(value); }));
        this.filteredOptions1 = this.form.controls.area.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value1) { return _this._filter1(value1); }));
    };
    AddressdetailsComponent.prototype._filter = function (value) {
        var filterValue = (value == null) ? value : value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AddressdetailsComponent.prototype._filter1 = function (value) {
        var filterValue1 = (value == null) ? value : value.toLowerCase();
        return this.options1.filter(function (option1) { return option1.toLowerCase().includes(filterValue1); });
    };
    AddressdetailsComponent.prototype.openGoogleMapDialog = function () {
        var _this = this;
        var dialogRef = this.googlemapdialog.open(DialogOpenMap, {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.form.controls['latitude'].setValue(result.data.Latitude);
            _this.form.controls['longitude'].setValue(result.data.Longitude);
        });
    };
    AddressdetailsComponent.prototype.getselected = function (row) {
        this.form.controls['addresstitle'].setValue(row.addressTitle);
        this.form.controls['county'].setValue(row.county);
        this.form.controls['area'].setValue(row.area);
        this.form.controls['address1'].setValue(row.address1);
        this.form.controls['address2'].setValue(row.address2);
        this.form.controls['landmark'].setValue(row.landMark);
        this.form.controls['latitude'].setValue(row.latitude);
        this.form.controls['longitude'].setValue(row.longitude);
        this.autoid = row.autonum;
        this.usermasterid = row.userMasterId;
        // this.UpdateDisabled=true;
    };
    AddressdetailsComponent.prototype.resetForm = function () {
        this.form.reset();
        this.autocompletereset();
        this.UpdateDisabled = false;
        this.AddDisabled = true;
    };
    AddressdetailsComponent.prototype.addaddressdetails = function (form) {
        var _this = this;
        var data = {
            'addresstitle': form.value.addresstitle,
            'county': form.value.county,
            'area': form.value.area,
            'address1': form.value.address1,
            'address2': form.value.address2,
            'landmark': form.value.landmark,
            'latitude': form.value.latitude,
            'longitude': form.value.longitude,
            'autonum': this.autoid,
            'usermasterid': this.user.usermasterid
        };
        var obj = JSON.stringify(data);
        // addressdatamodel: AddressDetails();
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/addaddress', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            _this.snackBar.open("Added Successfully !!!", "Address Details", {
                duration: 5000,
            });
            _this.resetForm();
            _this.loadAddressDetails();
            console.log(response);
            // this.navigateservice.navigateTo('addressdetails');
            // this.router.navigate(['blank']);
        }, function (err) {
            console.log(err.error);
        });
    };
    AddressdetailsComponent.prototype.loadAddressDetails = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]().set("userMasterID", this.user.usermasterid);
        this.http.get(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/loadaddress', { params: params }).subscribe(function (response) {
            // this.addressDetailsres = response as AddressDetails[];
            _this.dsaddressdetails = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
            console.log(response);
            console.log(_this.dsaddressdetails);
        }, function (err) {
            console.log(err.error);
        });
    };
    AddressdetailsComponent.prototype.updateaddressdetails = function (form) {
        var _this = this;
        var data = {
            'addresstitle': form.value.addresstitle,
            'county': form.value.county,
            'area': form.value.area,
            'address1': form.value.address1,
            'address2': form.value.address2,
            'landmark': form.value.landmark,
            'latitude': form.value.latitude,
            'longitude': form.value.longitude,
            'autonum': this.autoid,
            'usermasterid': this.user.usermasterid
        };
        var obj = JSON.stringify(data);
        console.log(obj);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/updateaddress', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            _this.snackBar.open("Updated Successfully!!!", "Address Details", {
                duration: 5000,
            });
            _this.resetForm();
            _this.loadAddressDetails();
            // this.UpdateDisabled=true;
            // this.AddDisabled=false;
            console.log(response);
            // this.navigateservice.navigateTo('addressdetails');
            // this.router.navigate(['blank']);
        }, function (err) {
            console.log(err.error);
        });
    };
    AddressdetailsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_7__["EnvironmentUrlService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: src_app_guards_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__["NavigateService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autocounty', { read: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteTrigger"], static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteTrigger"])
    ], AddressdetailsComponent.prototype, "autoTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoarea', { read: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteTrigger"], static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteTrigger"])
    ], AddressdetailsComponent.prototype, "autoTrigger1", void 0);
    AddressdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addressdetails',
            template: __webpack_require__(/*! raw-loader!./addressdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addressdetails/addressdetails.component.html"),
            styles: [__webpack_require__(/*! ./addressdetails.component.scss */ "./src/app/pages/addressdetails/addressdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_7__["EnvironmentUrlService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_guards_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__["NavigateService"]])
    ], AddressdetailsComponent);
    return AddressdetailsComponent;
}());

var DialogOpenMap = /** @class */ (function () {
    function DialogOpenMap(dialogRef, snackBar, mapsAPILoader, ngZone, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.data = data;
        this.title = 'AGM project';
    }
    DialogOpenMap.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 15;
                });
            });
        });
    };
    DialogOpenMap.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
                _this.getAddress(_this.latitude, _this.longitude);
            });
        }
    };
    DialogOpenMap.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    DialogOpenMap.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    DialogOpenMap.prototype.CloseMapDialog = function () {
        this.dialogRef.close({ event: 'close', data: { "Latitude": this.latitude, "Longitude": this.longitude } });
    };
    DialogOpenMap.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DialogOpenMap.prototype, "searchElementRef", void 0);
    DialogOpenMap = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-openmap',
            template: __webpack_require__(/*! raw-loader!./openmap.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addressdetails/openmap.component.html"),
            styles: [__webpack_require__(/*! ./addressdetails.component.scss */ "./src/app/pages/addressdetails/addressdetails.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object])
    ], DialogOpenMap);
    return DialogOpenMap;
}());



/***/ }),

/***/ "./src/app/pages/blank/blank.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/user.service */ "./src/app/guards/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BlankComponent = /** @class */ (function () {
    function BlankComponent(jwtHelper, router, userService, navigateservice, route, location, fb) {
        var _this = this;
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.userService = userService;
        this.navigateservice = navigateservice;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.logout = function () {
            localStorage.removeItem("jwt");
            localStorage.removeItem("FaceBookSocialUser");
            localStorage.removeItem("GoogleSocialUser");
            _this.navigateservice.navigateTo('');
            // this.router.navigate(['']);
        };
    }
    BlankComponent.prototype.ngOnInit = function () {
        console.log("IN");
        this.user = this.userService.getCurrentUser();
        console.log("OUT");
    };
    BlankComponent.prototype.isUserAuthenticated = function () {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        else {
            return false;
        }
    };
    BlankComponent.ctorParameters = function () { return [
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _guards_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_6__["NavigateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/pages/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _guards_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_6__["NavigateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/pages/deliverylocation/deliverylocation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/deliverylocation/deliverylocation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5bG9jYXRpb24vZGVsaXZlcnlsb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/deliverylocation/deliverylocation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/deliverylocation/deliverylocation.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeliverylocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverylocationComponent", function() { return DeliverylocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeliverylocationComponent = /** @class */ (function () {
    function DeliverylocationComponent() {
    }
    DeliverylocationComponent.prototype.ngOnInit = function () {
    };
    DeliverylocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deliverylocation',
            template: __webpack_require__(/*! raw-loader!./deliverylocation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/deliverylocation/deliverylocation.component.html"),
            styles: [__webpack_require__(/*! ./deliverylocation.component.scss */ "./src/app/pages/deliverylocation/deliverylocation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeliverylocationComponent);
    return DeliverylocationComponent;
}());



/***/ }),

/***/ "./src/app/pages/errors/error/error.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/errors/error/error.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(appSettings, router, navigateservice) {
        this.appSettings = appSettings;
        this.router = router;
        this.navigateservice = navigateservice;
        this.settings = this.appSettings.settings;
    }
    ErrorComponent.prototype.goHome = function () {
        this.navigateservice.navigateTo('');
        // this.router.navigate(['/']);
    };
    ErrorComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    ErrorComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] }
    ]; };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/errors/error/error.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(appSettings, router, fb) {
        this.appSettings = appSettings;
        this.router = router;
        this.fb = fb;
        this.settings = this.appSettings.settings;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'param': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NotFoundComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['/search', values['param']]);
        }
    };
    NotFoundComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    NotFoundComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/errors/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  color: #fff;\n  text-align: center;\n}\n.cont img {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n}\n.cont h1 {\n  font-size: 36px;\n  font-weight: 400;\n  margin: 0;\n}\n.cont h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 580px;\n  text-align: center;\n  margin: 0 auto;\n}\n.cont bg-image {\n  background-image: url('header-bg.png');\n  background-blend-mode: overlay;\n  background-size: 300px;\n}\nbody {\n  padding: 2em;\n}\n/* Shared */\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);\n}\n/* Kibsons */\n.loginBtn--kibsons {\n  background-color: #0d2c6c;\n  background-image: linear-gradient(#0d2c6c, #0d2c6c);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #0d2c6c;\n}\n.loginBtn--kibsons:before {\n  border-right: black 1px solid;\n  background: url('kibsons.png');\n  background-size: cover;\n}\n.loginBtn--kibsons:hover,\n.loginBtn--kibsons:focus {\n  background-color: #0d2c6c;\n  background-image: linear-gradient(#0d2c6c, #0d2c6c);\n}\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: black 1px solid;\n  background: url('facebook-icon.svg');\n  background-size: cover;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n/* Google */\n.loginBtn--google {\n  font-size: 15px;\n  font-weight: bold;\n  background-color: aliceblue;\n  border: 2px solid black;\n  height: 40px;\n  color: black;\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n}\n.loginBtn--google:before {\n  border-right: black 1px solid;\n  background: url('google-icon.svg');\n  background-size: cover;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: white;\n}\n/* Twitter */\n.loginBtn--twitter {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #00acee;\n  background-image: linear-gradient(#00acee, #00acee);\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--twitter:before {\n  border-right: black 1px solid;\n  background: url('twitter-icon.svg');\n  background-size: cover;\n}\n.loginBtn--twitter:hover,\n.loginBtn--twitter:focus {\n  background: #00acee;\n}\n.mat-form-field {\n  margin: 5px;\n}\n.wrapper {\n  display: flex;\n  width: 80%;\n  justify-content: space-between;\n}\n.align-left {\n  float: left;\n  font-size: x-small;\n}\n.align-right {\n  float: right;\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRVI7QURBSTtFQUNJLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0VSO0FES0E7RUFBTyxZQUFBO0FDRFA7QURNQSxXQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hGO0FES0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGRjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FER0E7RUFDRSwrQ0FBQTtBQ0FGO0FESUEsWUFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxtREFBQTtFQUNBLCtFQUFBO0VBQ0EsNkJBQUE7QUNESjtBREdFO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURFRTs7RUFFRSx5QkFBQTtFQUNBLG1EQUFBO0FDQ0o7QURHQSxhQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsK0VBQUE7RUFDQSw2QkFBQTtBQ0FGO0FERUE7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENBOztFQUVFLHlCQUFBO0VBQ0EsbURBQUE7QUNFRjtBRENBLFdBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0FDRUY7QURHQTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQ0FGO0FERUE7O0VBRUUsaUJBQUE7QUNDRjtBREVBLFlBQUE7QUFDQTtFQUNJLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLDZCQUFBO0FDQ0o7QURDRTtFQUNFLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQUU7O0VBRUUsbUJBQUE7QUNHSjtBREFFO0VBQ0UsV0FBQTtBQ0dKO0FEQUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FDR0o7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9IFxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBiZy1pbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2FwcC9oZWFkZXItYmcucG5nXCIpOyAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7IFxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbmJvZHkgeyBwYWRkaW5nOiAyZW07IH1cclxuXHJcblxyXG5cclxuXHJcbi8qIFNoYXJlZCAqL1xyXG4ubG9naW5CdG4ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG4ubG9naW5CdG46YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9naW5CdG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxvZ2luQnRuOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBLaWJzb25zICovXHJcbi5sb2dpbkJ0bi0ta2lic29ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQyYzZjO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwZDJjNmMsICMwZDJjNmMpO1xyXG4gICAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMwZDJjNmM7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0ta2lic29uczpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4va2lic29ucy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0ta2lic29uczpob3ZlcixcclxuICAubG9naW5CdG4tLWtpYnNvbnM6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmM2YztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMGQyYzZjLCAjMGQyYzZjKTtcclxuICB9XHJcblxyXG5cclxuLyogRmFjZWJvb2sgKi9cclxuLmxvZ2luQnRuLS1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRDNjlCQSwgIzNCNTVBMCk7XHJcbiAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG59XHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcclxuICBib3JkZXItcmlnaHQ6IGJsYWNrIDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4vZmFjZWJvb2staWNvbi5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xyXG59XHJcblxyXG4vKiBHb29nbGUgKi9cclxuLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAvKmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0NDQsICM0NDQpO1xyXG4gIC8vIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG59XHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL2dvb2dsZS1pY29uLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogVHdpdHRlciAqL1xyXG4ubG9naW5CdG4tLXR3aXR0ZXIge1xyXG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDBhY2VlLCAjMDBhY2VlKTtcclxuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG4gIH1cclxuICAubG9naW5CdG4tLXR3aXR0ZXI6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodDogYmxhY2sgMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL3R3aXR0ZXItaWNvbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tdHdpdHRlcjpob3ZlcixcclxuICAubG9naW5CdG4tLXR3aXR0ZXI6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgfVxyXG4gXHJcbiAgLmFsaWduLWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG4gIC5hbGlnbi1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfSAiLCIuY29udCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udCBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb250IGgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG4uY29udCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250IGJnLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9hcHAvaGVhZGVyLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMmVtO1xufVxuXG4vKiBTaGFyZWQgKi9cbi5sb2dpbkJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXG4gIG1hcmdpbjogMC4yZW07XG4gIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubG9naW5CdG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dpbkJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sb2dpbkJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogS2lic29ucyAqL1xuLmxvZ2luQnRuLS1raWJzb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmM2YztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwZDJjNmMsICMwZDJjNmMpO1xuICAvKmZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBuZXVlXCIsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyovXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMGQyYzZjO1xufVxuXG4ubG9naW5CdG4tLWtpYnNvbnM6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4va2lic29ucy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkJ0bi0ta2lic29uczpob3Zlcixcbi5sb2dpbkJ0bi0ta2lic29uczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDJjNmM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMGQyYzZjLCAjMGQyYzZjKTtcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRDNjlCQSwgIzNCNTVBMCk7XG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRDOEM7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4vZmFjZWJvb2staWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXG4ubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xufVxuXG4vKiBHb29nbGUgKi9cbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4vZ29vZ2xlLWljb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW5CdG4tLWdvb2dsZTpob3Zlcixcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qIFR3aXR0ZXIgKi9cbi5sb2dpbkJ0bi0tdHdpdHRlciB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgYmFja2dyb3VuZDogIzAwYWNlZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMGFjZWUsICMwMGFjZWUpO1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4Qztcbn1cblxuLmxvZ2luQnRuLS10d2l0dGVyOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogYmxhY2sgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL3R3aXR0ZXItaWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkJ0bi0tdHdpdHRlcjpob3Zlcixcbi5sb2dpbkJ0bi0tdHdpdHRlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMGFjZWU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFsaWduLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent, DialogForgotPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForgotPass", function() { return DialogForgotPass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/environment-url.service */ "./src/app/shared/services/environment-url.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(appSettings, fb, router, http, envUrl, navigateservice, forgotpassdialog, snackBar) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.envUrl = envUrl;
        this.navigateservice = navigateservice;
        this.forgotpassdialog = forgotpassdialog;
        this.snackBar = snackBar;
        this.errorMessage = "";
        this.LoginError = null;
        this.hide = true;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            rememberMe: false
        });
    }
    Object.defineProperty(LoginComponent.prototype, "emailInput", {
        get: function () { return this.form.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "passwordInput", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.googleInitialize = function () {
        var _this = this;
        window['googleSDKLoaded'] = function () {
            window['gapi'].load('auth2', function () {
                _this.auth2 = window['gapi'].auth2.init({
                    client_id: '765623504677-7ikt7igooq72ksqbk02u3rcs5q6jvcmq.apps.googleusercontent.com',
                    cookie_policy: 'single_host_origin',
                    scope: 'profile email'
                });
                _this.tryGoogleLogin();
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.googleInitialize();
    };
    LoginComponent.prototype.tryRegister = function (form) {
        var _this = this;
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/signup', form, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            var token = response.token;
            localStorage.setItem('jwt', token);
            console.log(response);
            _this.invalidLogin = false;
            _this.navigateservice.navigateTo('blank');
            // this.router.navigate(['blank']);
        }, function (err) {
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.tryLogin = function (form) {
        var _this = this;
        var credentials = JSON.stringify(form.value);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/signin', form, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            var token = response.token;
            localStorage.setItem('jwt', token);
            _this.invalidLogin = false;
            _this.navigateservice.navigateTo('blank');
            // this.router.navigate(['blank']);
            console.log("ASDF");
        }, function (err) {
            _this.snackBar.open("Login Failed ", "Login Error", {
                duration: 5000,
            });
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        window['FB'].login(function (response) {
            //localStorage.setItem('FaceBookSocialUser', JSON.stringify( response)); 
            if (response.authResponse) {
                window['FB'].api('/me', {
                    fields: 'first_name, last_name, email, picture'
                }, function (userInfo) {
                    localStorage.setItem('FaceBookSocialUser', JSON.stringify(userInfo));
                    console.log("user information");
                    console.log(userInfo);
                    _this.invalidLogin = false;
                    _this.navigateservice.navigateTo('blank');
                    // this.router.navigate(['blank']);
                });
            }
            else {
                _this.snackBar.open('User login failed', "Login Error", {
                    duration: 5000,
                });
                _this.invalidLogin = true;
            }
        }, { scope: 'email' });
    };
    LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {}, function (googleUser) {
            localStorage.setItem('GoogleSocialUser', JSON.stringify(googleUser.getBasicProfile()));
            // let profile = googleUser.getBasicProfile();
            // console.log('Token || ' + googleUser.getAuthResponse().id_token);
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail());
            // console.log(profile);
            // console.log(localStorage.getItem("SocialUser"))
            _this.invalidLogin = false;
            //this.router.navigateByUrl('/blank');  
            _this.navigateservice.navigateTo('blank');
        }, function (err) {
            _this.snackBar.open(err.error, "Login Error", { duration: 5000 });
            _this.invalidLogin = true;
        });
        if (!this.invalidLogin) {
            this.navigateservice.navigateTo('blank');
            // this.router.navigate(['blank']);
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LoginComponent.prototype.openForgotPassDialog = function (form) {
        var _this = this;
        var dialogRef = this.forgotpassdialog.open(DialogForgotPass, {
            data: { name: form.value.email, emailValidator: form.value.email }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.animal = result;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"] },
        { type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__["NavigateService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('googleLoginRef', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "loginElement", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"],
            src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_8__["NavigateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());

var DialogForgotPass = /** @class */ (function () {
    function DialogForgotPass(dialogRef, fb, snackBar, http, envUrl, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.http = http;
        this.envUrl = envUrl;
        this.data = data;
        this.verifyshow = false;
        this.Passwordshow = false;
        this.resetpasswordhide = true;
        this.resetconfirmhide = true;
        this.form = this.fb.group({
            'sendOTPto': [null],
            'verificationcode': [null],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            'confirmpassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('password', 'confirmpassword')]
        });
    }
    DialogForgotPass.prototype.onNoClick = function (form) {
        this.sendOTP(this.data.name, form.value.sendOTPto);
        // this.dialogRef.close();
    };
    DialogForgotPass.prototype.sendOTP = function (sendto, sendtype) {
        var _this = this;
        var formdata = {
            'OTPReceiver': sendto,
            'ReceiverType': sendtype,
            'Code': "0"
        };
        var obj = JSON.stringify(formdata);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/SendOTP', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            console.log(response);
            _this.snackBar.open("OTP Sent to : " + formdata.OTPReceiver, "SMS Sent", {
                duration: 5000,
            });
            _this.verifyshow = true;
        }, function (err) {
            // this.form.get('username')
            console.log(err);
            _this.snackBar.open(err, "SMS Error", {
                duration: 3000,
            });
        });
    };
    DialogForgotPass.prototype.onBlur = function ($event) {
        var _this = this;
        var formdata = {
            'OTPReceiver': this.data.name,
            'ReceiverType': this.form.value.sendOTPto,
            'code': this.form.value.verificationcode
        };
        console.log(formdata);
        var obj = JSON.stringify(formdata);
        console.log(obj);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/VerifyOTP', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            _this.snackBar.open("Verified Successfully !!!", "OTP Verification", {
                duration: 5000,
            });
            _this.Passwordshow = true;
        }, function (err) {
            var control = _this.form.get('verificationcode');
            control.setErrors;
            console.log(control.setErrors);
            _this.snackBar.open(err.error, "OTP Verification", {
                duration: 5000,
            });
        });
    };
    DialogForgotPass.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogForgotPass = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-forgotpass',
            template: __webpack_require__(/*! raw-loader!./forgotpass.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/forgotpass.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"], Object])
    ], DialogForgotPass);
    return DialogForgotPass;
}());



/***/ }),

/***/ "./src/app/pages/myitems/myitems.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/myitems/myitems.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215aXRlbXMvbXlpdGVtcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/myitems/myitems.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/myitems/myitems.component.ts ***!
  \****************************************************/
/*! exports provided: MyitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyitemsComponent", function() { return MyitemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_model_shoppingcart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/model/shoppingcart */ "./src/app/shared/model/shoppingcart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyitemsComponent = /** @class */ (function () {
    function MyitemsComponent() {
    }
    MyitemsComponent.prototype.ngOnInit = function () {
    };
    MyitemsComponent.prototype.AddQty = function (event) { };
    MyitemsComponent.prototype.SubQty = function (event) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_model_shoppingcart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"])
    ], MyitemsComponent.prototype, "myCartList", void 0);
    MyitemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myitems',
            template: __webpack_require__(/*! raw-loader!./myitems.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/myitems/myitems.component.html"),
            styles: [__webpack_require__(/*! ./myitems.component.scss */ "./src/app/pages/myitems/myitems.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyitemsComponent);
    return MyitemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/myshopcart/myshopcart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/myshopcart/myshopcart.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215c2hvcGNhcnQvbXlzaG9wY2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/myshopcart/myshopcart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/myshopcart/myshopcart.component.ts ***!
  \**********************************************************/
/*! exports provided: MyShopCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShopCartComponent", function() { return MyShopCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyShopCartComponent = /** @class */ (function () {
    function MyShopCartComponent() {
    }
    MyShopCartComponent.prototype.ngOnInit = function () {
        this.loadMyShopCart();
    };
    MyShopCartComponent.prototype.loadMyShopCart = function () {
        this.myShopCartArray = JSON.parse(localStorage.getItem("myKIBShopCart"));
        //    for(let result of this.myShopCartArray){
        //     this.CartTotalAmount+=  result.StockCartQty * result.DisplayRate;
        //  }
    };
    MyShopCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myshopcart',
            template: __webpack_require__(/*! raw-loader!./myshopcart.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/myshopcart/myshopcart.component.html"),
            styles: [__webpack_require__(/*! ./myshopcart.component.scss */ "./src/app/pages/myshopcart/myshopcart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyShopCartComponent);
    return MyShopCartComponent;
}());



/***/ }),

/***/ "./src/app/pages/mywishlist/mywishlist.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/mywishlist/mywishlist.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215d2lzaGxpc3QvbXl3aXNobGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/mywishlist/mywishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mywishlist/mywishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: MyWishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWishListComponent", function() { return MyWishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyWishListComponent = /** @class */ (function () {
    function MyWishListComponent() {
        this.myWishListArray = [];
    }
    MyWishListComponent.prototype.ngOnInit = function () {
        this.loadMyWishList();
    };
    MyWishListComponent.prototype.loadMyWishList = function () {
        this.myWishListArray = JSON.parse(localStorage.getItem("myKIBFavCart"));
        //   this.CartTotalCount=myKIBShopCart.length;
        //   this.TotalFavCount=myKIBFavCart.length;
        //   for(let result of myKIBShopCart){
        //     this.CartTotalAmount+=  result.StockCartQty * result.DisplayRate;
        //  }
    };
    MyWishListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mywishlist',
            template: __webpack_require__(/*! raw-loader!./mywishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mywishlist/mywishlist.component.html"),
            styles: [__webpack_require__(/*! ./mywishlist.component.scss */ "./src/app/pages/mywishlist/mywishlist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyWishListComponent);
    return MyWishListComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-toolbar {\n  position: relative;\n  height: 50px;\n  z-index: 1;\n  margin: 0;\n}\n\n.pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav {\n  width: 260px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.header {\n  position: relative;\n  z-index: 2;\n  transition: 0.3s;\n  background: #0d2c6c;\n}\n\n.header.over {\n  z-index: 99;\n}\n\n.footer {\n  height: 50px;\n  position: relative;\n  z-index: 3;\n  background: #0d2c6c;\n}\n\n.options {\n  position: fixed;\n  width: 260px;\n  z-index: 999999;\n}\n\n.options .op-header {\n  height: 50px;\n  padding: 0 14px;\n}\n\n.options .control {\n  padding: 6px 14px;\n}\n\n.options .control div {\n  padding: 6px 0;\n}\n\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options .control .skin-primary {\n  width: 46px;\n  height: 46px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 46px solid;\n  border-left: 46px solid transparent;\n}\n\n.options .control .skin-primary.indigo-light {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.teal-light {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options .control .skin-primary.teal-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.red-light {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options .control .skin-primary.red-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.gray-light {\n  background-color: #757575;\n  border: 1px solid #757575;\n}\n\n.options .control .skin-primary.gray-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.blue-dark {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.green-dark {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options .control .skin-primary.green-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.pink-dark {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.gray-dark {\n  background-color: #607D8B;\n  border: 1px solid #607D8B;\n}\n\n.options .control .skin-primary.gray-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n\n.options .mat-slide-toggle {\n  height: auto;\n}\n\n.options .ps {\n  height: calc(100% - 50px);\n}\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon {\n  position: fixed;\n  top: 120px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 99999;\n}\n\n.options-icon .mat-icon {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n.catimg img {\n  height: 120px;\n  padding: 1px;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  transition: 0.3s;\n}\n\n.back-to-top:hover {\n  opacity: 0.9;\n}\n\ninput.mat-input-element {\n  color: yellow;\n}\n\n.kib-top-header {\n  background-color: #0d2c6c;\n  color: #fff;\n  line-height: 46px;\n  text-decoration: none !important;\n  width: 100%;\n  font-family: Kibfonts !important;\n}\n\n.kib-top-header img {\n  height: 24px;\n  width: auto;\n  margin: auto 15px auto 0px;\n}\n\n.kib-top-header .free-delivery {\n  width: 25%;\n  float: left;\n  display: inline-flex;\n  border-right: 1px solid #fff;\n  height: 50px;\n}\n\n.kib-top-header p {\n  color: #fff;\n  font-size: 15px;\n  line-height: 50px;\n}\n\n.kib-top-header i {\n  color: #fff;\n  font-size: 25px;\n  line-height: 50px;\n  margin-right: 20px;\n}\n\n.kib-top-header .callus {\n  width: 16%;\n  float: left;\n  display: inline-flex;\n  border-right: 1px solid #fff;\n  height: 50px;\n  padding: 0px 15px;\n}\n\n.kib-top-header .callus i {\n  color: #fff;\n  font-size: 20px;\n  line-height: 50px;\n}\n\n.kib-top-header .social-icons2 {\n  width: 25%;\n  float: left;\n  display: inline-flex;\n  border-right: 1px solid #fff;\n  height: 50px;\n  padding: 8px 15px;\n}\n\n.kib-top-header .social-icons2 i {\n  color: #fff;\n  font-size: 20px;\n  line-height: 50px;\n  margin: 0px 0px 0px 0px;\n}\n\n.kib-top-header .social-icons2 a {\n  color: #fff;\n  font-size: 15px;\n  line-height: 50px;\n}\n\n.kib-top-header .top-login {\n  width: 18%;\n  float: left;\n  display: inline-flex;\n  height: 50px;\n  padding: 0px 15px;\n}\n\n.kib-top-header .top-login i {\n  color: #fff;\n  font-size: 20px;\n  line-height: 50px;\n  margin: 0px 0px 0px 10px;\n}\n\n.kib-top-header .top-login a {\n  color: #fff;\n  font-size: 15px;\n  line-height: 50px;\n}\n\n.del-fresh-icon {\n  width: 15%;\n  float: left;\n  display: inline-flex;\n  height: 50px;\n}\n\n.del-fresh-icon img {\n  width: 100%;\n  height: 50px;\n}\n\n.kib-text {\n  font-family: Kibfonts !important;\n}\n\n.kib-text p {\n  line-height: 20px;\n  color: #706b66;\n  font-size: 16px;\n  font-weight: 200;\n  margin: 10px 0px;\n}\n\n.kib-text h2 {\n  line-height: 20px;\n  font-size: 16px;\n  font-weight: 200;\n  margin: 15px 0px;\n}\n\n@font-face {\n  font-family: \"Kibfonts\";\n  src: url('33535gillsansmt.woff') format(\"woff\");\n}\n\n.mat-toolbar.primary {\n  color: #fff;\n}\n\n.cartimg {\n  position: relative;\n  height: 30px;\n  width: auto;\n  margin: 0px 15px;\n  position: relative;\n}\n\n.cartimg .cartcount {\n  position: absolute;\n  color: #0d2c6c;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding-top: 10px;\n}\n\n.favimg {\n  height: 30px;\n  width: auto;\n  margin: 0px;\n  position: relative;\n}\n\n.favimg .favcount {\n  position: absolute;\n  color: #0d2c6c;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9FOlxcUmFtZXNoXFxLaWJzb25zV0VCL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQ0hpQjtFRElqQixVQUFBO0VBQ0EsU0FBQTtBRUZKOztBRktBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUVGSjs7QUZLQTtFQUNJLFlDWlk7RURhWixnQkFBQTtFQUNBLHVCQUFBO0FFRko7O0FGS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FFSEo7O0FGRUk7RUFBUSxXQUFBO0FFQ1o7O0FGSUE7RUFDSSxZQzdCb0I7RUQ4QnBCLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FFREo7O0FGS0E7RUFDSSxlQUFBO0VBQ0EsWUNwQ1k7RURxQ1osZUFBQTtBRUZKOztBRklJO0VBQ0ksWUM1Q2E7RUQ2Q2IsZUFBQTtBRUZSOztBRktJO0VBQ0ksaUJBQUE7QUVIUjs7QUZLUTtFQUNJLGNBQUE7QUVIWjs7QUZNUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUVKWjs7QUZPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRUxaOztBRk9ZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBRUxoQjs7QUZRWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVOaEI7O0FGUWdCO0VBQ0ksNEJBQUE7QUVOcEI7O0FGVVk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFUmhCOztBRlVnQjtFQUNJLDRCQUFBO0FFUnBCOztBRllZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRVZoQjs7QUZZZ0I7RUFDSSw0QkFBQTtBRVZwQjs7QUZjWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVaaEI7O0FGY2dCO0VBQ0ksNEJBQUE7QUVacEI7O0FGZ0JZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRWRoQjs7QUZnQmdCO0VBQ0ksNEJBQUE7QUVkcEI7O0FGa0JZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRWhCaEI7O0FGa0JnQjtFQUNJLDRCQUFBO0FFaEJwQjs7QUZvQlk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFbEJoQjs7QUZvQmdCO0VBQ0ksNEJBQUE7QUVsQnBCOztBRnNCWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVwQmhCOztBRnNCZ0I7RUFDSSw0QkFBQTtBRXBCcEI7O0FGMEJJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBRXhCUjs7QUYwQlE7RUFDSSxhQUFBO0FFeEJaOztBRjRCSTtFQUNJLFlBQUE7QUUxQlI7O0FGNkJJO0VBQ0kseUJBQUE7QUUzQlI7O0FGK0JBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFNUJKOztBRitCQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUU1Qko7O0FGOEJJO0VBQ0ksMENBQUE7RUFFQSxrQ0FBQTtBRTVCUjs7QUZnQ0E7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBRTdCQTs7QUZ1Q0E7RUFDSTtJQUNJLGlDQUFBO0VFL0JOO0FBQ0Y7O0FGa0NBO0VBQ0k7SUFDSSx5QkFBQTtFRWhDTjtBQUNGOztBRm1DQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRWpDSjs7QUZtQ0k7RUFDSSxZQUFBO0FFakNSOztBRnFDQTtFQUNJLGFBQUE7QUVsQ0o7O0FGcUNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBRWxDSjs7QUZxQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FFbENSOztBRnFDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUVsQ1I7O0FGcUNJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRWxDUjs7QUZxQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUVsQ1I7O0FGcUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FFbENSOztBRnFDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUVsQ1o7O0FGcUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FFbENSOztBRm9DSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBRWpDUjs7QUZtQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FFaENSOztBRnFDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUVsQ1I7O0FGcUNRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FFbENaOztBRnFDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUVsQ1o7O0FGcUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUVsQ0o7O0FGcUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUVsQ1I7O0FGc0NBO0VBQVUsZ0NBQUE7QUVsQ1Y7O0FGbUNBO0VBQVksaUJBQUE7RUFBa0IsY0FBQTtFQUFjLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBZ0IsZ0JBQUE7QUUzQjVFOztBRjRCQTtFQUFhLGlCQUFBO0VBQWlCLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBZ0IsZ0JBQUE7QUVyQjlEOztBRnVCQTtFQUNJLHVCQUFBO0VBQ0EsK0NBQUE7QUVwQko7O0FGdUJBO0VBR0ksV0FBQTtBRXZCSjs7QUYwQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRXZCUjs7QUYwQks7RUFDRyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUV2QlI7O0FGNEJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUV6QmhCOztBRjRCWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUV6QmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi50b3AtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6ICR0b3AtdG9vbGJhci1oZWlnaHQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGluIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICYub3ZlciB7ei1pbmRleDogOTk7fVxyXG4gICAgYmFja2dyb3VuZDogIzBkMmM2YztcclxufVxyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gICAgaGVpZ2h0OiAkZm9vdGVyLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJhY2tncm91bmQ6ICMwZDJjNmM7XHJcbn1cclxuXHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcblxyXG4gICAgLm9wLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAkdG9wLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbCB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2tpbi1wcmltYXJ5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDQ2cHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pbmRpZ28tbGlnaHQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjUxQjU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnRlYWwtbGlnaHQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk2ODg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnJlZC1saWdodCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Y0NDMzNjtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZ3JheS1saWdodCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc1NzU3NTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYmx1ZS1kYXJrIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDI3N2JkO1xyXG5cclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5ncmVlbi1kYXJrIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xyXG5cclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5waW5rLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEODFCNjA7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmdyYXktZGFyayB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzYwN0Q4QjtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcyB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b3AtdG9vbGJhci1oZWlnaHR9KTtcclxuICAgIH1cclxufVxyXG5cclxuLm9wLWltYWdlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5vcHRpb25zLWljb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRpbWcgaW1ne1xyXG5oZWlnaHQ6IDEyMHB4O1xyXG5wYWRkaW5nOiAxcHg7XHJcbiAgICBcclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIC5raWItdG9wLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQyYzZjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogS2liZm9udHMgIWltcG9ydGFudDtcclxufVxyXG5cclxuICAgIC5raWItdG9wLWhlYWRlciBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IGF1dG8gMTVweCBhdXRvIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgLmZyZWUtZGVsaXZlcnkge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmtpYi10b3AtaGVhZGVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgLmNhbGx1cyB7XHJcbiAgICAgICAgd2lkdGg6IDE2JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLmtpYi10b3AtaGVhZGVyIC5jYWxsdXMgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgLnNvY2lhbC1pY29uczIge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICAua2liLXRvcC1oZWFkZXIgLnNvY2lhbC1pY29uczIgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmtpYi10b3AtaGVhZGVyIC5zb2NpYWwtaWNvbnMyIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAgXHJcblxyXG4gICAgLmtpYi10b3AtaGVhZGVyIC50b3AtbG9naW4ge1xyXG4gICAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICAua2liLXRvcC1oZWFkZXIgLnRvcC1sb2dpbiBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5raWItdG9wLWhlYWRlciAudG9wLWxvZ2luIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4uZGVsLWZyZXNoLWljb24ge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiAgICAuZGVsLWZyZXNoLWljb24gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbi5raWItdGV4dHtmb250LWZhbWlseTpLaWJmb250cyFpbXBvcnRhbnQ7fVxyXG4ua2liLXRleHQgcHtsaW5lLWhlaWdodDoyMHB4OyBjb2xvcjojNzA2YjY2O2ZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDoyMDA7bWFyZ2luOiAxMHB4IDBweDt9XHJcbi5raWItdGV4dCBoMntsaW5lLWhlaWdodDoyMHB4O2ZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDoyMDA7bWFyZ2luOiAxNXB4IDBweDt9XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2liZm9udHMnO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9lbi8zMzUzNWdpbGxzYW5zbXQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIucHJpbWFyeSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMGQyYzZjO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gICAgLmNhcnRpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jYXJ0aW1nIC5jYXJ0Y291bnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogIzBkMmM2YztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7fVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mYXZpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAuZmF2aW1nIC5mYXZjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBkMmM2YztcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICIsIiRtYWluLWZvbnQtZmFtaWx5OiAnS2liZm9udHMnLCdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvcC10b29sYmFyLWhlaWdodDogNTBweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiA2NHB4OyBcclxuJGZvb3Rlci10b29sYmFyLWhlaWdodDogNTBweDsgXHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XHJcbiRjb21wYWN0LXNpZGVuYXYtd2lkdGg6IDE3MHB4O1xyXG4kbWluaS1zaWRlbmF2LXdpZHRoOiA2NnB4OyIsIi50b3AtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDA7XG59XG5cbi5waW4ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kOiAjMGQyYzZjO1xufVxuLmhlYWRlci5vdmVyIHtcbiAgei1pbmRleDogOTk7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogIzBkMmM2Yztcbn1cblxuLm9wdGlvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNjBweDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLm9wdGlvbnMgLm9wLWhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbn1cbi5vcHRpb25zIC5jb250cm9sIGRpdiB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgaDQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5IHtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeSAuc2tpbi1zZWNvbmRhcnkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiA0NnB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogNDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnRlYWwtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS50ZWFsLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNDQzMzY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ncmF5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1NzU3NTtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuZ3JheS1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI3N2JkO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuZ3JlZW4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODhFM0M7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZWVuLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyYXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MDdEOEI7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyYXktZGFyayAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xufVxuLm9wdGlvbnMgLm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm9wdGlvbnMgLm1hdC1yYWRpby1ncm91cCAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDA7XG59XG4ub3B0aW9ucyAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5vcHRpb25zIC5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG59XG5cbi5vcC1pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm9wdGlvbnMtaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMjBweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk7XG59XG4ub3B0aW9ucy1pY29uIC5tYXQtaWNvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uY2F0aW1nIGltZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk5O1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYmFjay10by10b3A6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmtpYi10b3AtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmM2YztcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBLaWJmb250cyAhaW1wb3J0YW50O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvIDE1cHggYXV0byAwcHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAuZnJlZS1kZWxpdmVyeSB7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAuY2FsbHVzIHtcbiAgd2lkdGg6IDE2JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgLmNhbGx1cyBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAuc29jaWFsLWljb25zMiB7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIC5zb2NpYWwtaWNvbnMyIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAuc29jaWFsLWljb25zMiBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAudG9wLWxvZ2luIHtcbiAgd2lkdGg6IDE4JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgLnRvcC1sb2dpbiBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIC50b3AtbG9naW4gYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4uZGVsLWZyZXNoLWljb24ge1xuICB3aWR0aDogMTUlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmRlbC1mcmVzaC1pY29uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5raWItdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBLaWJmb250cyAhaW1wb3J0YW50O1xufVxuXG4ua2liLXRleHQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzcwNmI2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ua2liLXRleHQgaDIge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiS2liZm9udHNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvZW4vMzM1MzVnaWxsc2Fuc210LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbi5tYXQtdG9vbGJhci5wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJ0aW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJ0aW1nIC5jYXJ0Y291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjMGQyYzZjO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5mYXZpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmF2aW1nIC5mYXZjb3VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICMwZDJjNmM7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/utils/app-animation */ "./src/app/theme/utils/app-animation.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
/* harmony import */ var _shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/notifyscroll.service */ "./src/app/shared/services/notifyscroll.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { ProductsComponent } from './products/products.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { JwtHelperService} from '@auth0/angular-jwt';
var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, fb, router, menuService, navigateservice, notifyScrollService) {
        var _this = this;
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.menuService = menuService;
        this.navigateservice = navigateservice;
        this.notifyScrollService = notifyScrollService;
        this.PageScrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionsPsConfig = {};
        this.showSidenav = false;
        this.CartTotalAmount = 0;
        this.CartTotalCount = 0;
        this.TotalFavCount = 0;
        // public showInfoContent = false;
        this.toggleSearchBar = false;
        this.menus = ["vertical", "horizontal"];
        this.menuTypes = ["default", "compact", "mini"];
        // options: string[] = ['Abu Dhabi', 'Abu Dhabi - Al Ruwais', 'Ajman', 'Al Ain', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Um Al Quaian'];
        this.options = [""];
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            SearchFieldName: [null, null],
        });
        // this.backToTop.nativeElement.style.display = 'none'; 
        this.router.events.subscribe(function (event) {
            // if (event instanceof NavigationEnd) {
            //   this.scrollToTop();
            // } 
            if (window.innerWidth <= 960) {
                _this.sidenav.close();
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.optionsPsConfig.wheelPropagation = false;
        if (window.innerWidth <= 960) {
            this.settings.menu = "vertical";
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
        this.autocompletereset();
        this.loadCartValues();
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.settings.loadingSpinner = false;
        }, 300);
        this.backToTop.nativeElement.style.display = "none";
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.scrollToTop();
            }
            if (window.innerWidth <= 960) {
                _this.sidenav.close();
            }
        });
        if (this.settings.menu === "vertical") {
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
        }
        this.autoTrigger.panelClosingActions.subscribe(function (x) {
            if (_this.autoTrigger.activeOption) {
                // console.log(this.autoTrigger.activeOption.value);
                // this.myControl.setValue(this.autoTrigger.activeOption.value)
                _this.form.controls["SearchFieldName"].setValue(_this.autoTrigger.activeOption.value);
            }
        });
    };
    PagesComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    PagesComponent.prototype.chooseMenu = function () {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        if (this.menuOption === "horizontal") {
            this.settings.fixedSidenav = false;
        }
        this.navigateservice.navigateTo("/");
        // this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function () {
        this.settings.menuType = this.menuTypeOption;
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    // public closeInfoContent(showInfoContent) {
    //   this.showInfoContent = !showInfoContent;
    // }
    PagesComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 960) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = "vertical";
        }
        else {
            this.defaultMenu === "horizontal"
                ? (this.settings.menu = "horizontal")
                : (this.settings.menu = "vertical");
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    };
    PagesComponent.prototype.onPsScrollY = function (event) {
        event.target.scrollTop > 300
            ? (this.backToTop.nativeElement.style.display = "flex")
            : (this.backToTop.nativeElement.style.display = "none");
        this.PageScrolled.emit(true);
        this.notifyScrollService.notifyOther({ option: 'call_child', value: event.target.scrollTop });
    };
    PagesComponent.prototype.scrollToTop = function () {
        // console.log(this.pss);
        this.pss.forEach(function (ps) {
            if (ps.elementRef.nativeElement.id === "main") {
                ps.scrollToTop(0, 250);
            }
        });
    };
    PagesComponent.prototype.closeSubMenus = function () {
        if (this.settings.menu === "vertical") {
            this.menuService.closeAllSubMenus();
        }
    };
    PagesComponent.prototype.openmyshopcart = function () {
        this.navigateservice.navigateTo("/myshopcart");
    };
    PagesComponent.prototype.openmywishlist = function () {
        this.navigateservice.navigateTo("/mywishlist");
    };
    PagesComponent.prototype.openLogin = function () {
        this.navigateservice.navigateTo("/login");
    };
    PagesComponent.prototype.openRegister = function () {
        this.navigateservice.navigateTo("/register");
    };
    PagesComponent.prototype.autocompletereset = function () {
        var _this = this;
        this.filteredOptions = this.form.controls.SearchFieldName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this._filter(value); }));
    };
    PagesComponent.prototype.loadCartValues = function () {
        // this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
        var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
        if (myCartValue === null) {
            var data = {
                fav: 0,
                cnt: 0,
                amt: 0,
            };
            var obj = JSON.stringify(data);
            localStorage.setItem("myCartValue", obj);
            this.CartTotalAmount = data.amt;
            this.CartTotalCount = data.cnt;
            this.TotalFavCount = data.fav;
        }
        else {
            this.CartTotalAmount = myCartValue.amt;
            this.CartTotalCount = myCartValue.cnt;
            this.TotalFavCount = myCartValue.fav;
        }
    };
    PagesComponent.prototype._filter = function (value) {
        var filterValue = value == null ? value : value.toLowerCase();
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
        });
    };
    PagesComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
        { type: _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_9__["NavigateService"] },
        { type: _shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_10__["NotifyScrollService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sidenav", { static: true }),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("backToTop", { static: true }),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "backToTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchKibsons", { read: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"])
    ], PagesComponent.prototype, "autoTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PagesComponent.prototype, "pss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-pages",
            template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html"),
            animations: [_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_4__["rotate"]],
            providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]],
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
            _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_9__["NavigateService"],
            _shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_10__["NotifyScrollService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/productdetails/productdetails.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/productdetails/productdetails.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/productdetails/productdetails.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/productdetails/productdetails.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! raw-loader!./productdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.scss */ "./src/app/pages/productdetails/productdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_stockmaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/stockmaster */ "./src/app/shared/model/stockmaster.ts");
/* harmony import */ var src_app_shared_model_shoppingcart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/shoppingcart */ "./src/app/shared/model/shoppingcart.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(pagesComponent, snackBar) {
        this.pagesComponent = pagesComponent;
        this.snackBar = snackBar;
        this.myKIBShopCart = [];
        this.myKIBFavCart = [];
        this.tmpProductsArry = [];
        this.qty = 0;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        if (this.stockMaster.StockFavourites === "YES") {
            this.myVariableColor = "red";
        }
        else {
            this.myVariableColor = "white";
        }
    };
    // ngOnChanges(changes: SimpleChanges): void {
    //   console.log("AM IN"); 
    // }
    ProductsComponent.prototype.AddQty = function (event) {
        // 
        this.stockMaster.StockCartQty++;
        this.addtocart(this.stockMaster);
        this.snackBar.open("1 " + this.stockMaster.DisplayUnits + " of " + this.stockMaster.StockDesc + " Added", "Kibsons Shopping Cart", { duration: 3000, });
        //localStorage.setItem("ShottpingCart",JSON.stringify(this.stockMaster));
    };
    ProductsComponent.prototype.SubQty = function (event) {
        if (this.stockMaster.StockCartQty > 0) {
            // 
            this.stockMaster.StockCartQty--;
            this.subfromcart(this.stockMaster);
            this.snackBar.open("1 " + this.stockMaster.DisplayUnits + " of " + this.stockMaster.StockDesc + " Removed", "Kibsons Shopping Cart", { duration: 3000, });
        }
    };
    ProductsComponent.prototype.addfav = function (event) {
        var _this = this;
        var data = {
            'SpDocSrNo': this.stockMaster.SpDocSrNo,
            'StockCode': this.stockMaster.StockCode,
            'StockDesc': this.stockMaster.StockDesc
        };
        // const obj = JSON.stringify(data);
        this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
        if (this.myKIBFavCart === null) {
            localStorage.setItem("myKIBFavCart", JSON.stringify(Array.of(this.stockMaster)));
            this.myVariableColor = "red";
            var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
            myCartValue.fav++;
            localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
            this.pagesComponent.TotalFavCount = myCartValue.fav;
            this.snackBar.open(this.stockMaster.StockDesc + " Added to Your Favorites", "Kibsons Favorite Items", { duration: 3000, });
            return;
        }
        var productExistInCart = this.myKIBFavCart.find(function (a) { return a.StockCode === _this.stockMaster.StockCode; });
        if (!productExistInCart) {
            this.myKIBFavCart.push(Object.assign(this.stockMaster));
            this.myVariableColor = "red";
            var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
            myCartValue.fav++;
            localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
            this.pagesComponent.TotalFavCount = myCartValue.fav;
            this.snackBar.open(this.stockMaster.StockDesc + " Added to Your Favorites", "Kibsons Favorite Items", { duration: 3000, });
        }
        else {
            this.myKIBFavCart.splice(this.myKIBFavCart.indexOf(this.myKIBFavCart.find(function (a) { return a.StockCode === _this.stockMaster.StockCode; })), 1);
            this.myVariableColor = "white";
            var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
            myCartValue.fav--;
            localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
            this.pagesComponent.TotalFavCount = myCartValue.fav;
            this.snackBar.open(this.stockMaster.StockDesc + " Removed from Your Favorites", "Kibsons Favorite Items", { duration: 3000, });
        }
        localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));
    };
    ProductsComponent.prototype.addtocart = function (_stockMaster) {
        var _shopcart = new src_app_shared_model_shoppingcart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]();
        _shopcart.SpDocSrNo = _stockMaster.SpDocSrNo;
        _shopcart.StockCode = _stockMaster.StockCode;
        _shopcart.StockDesc = _stockMaster.StockDesc;
        _shopcart.StockOrigin = _stockMaster.StockOrigin;
        _shopcart.StockCartQty = _stockMaster.StockCartQty;
        _shopcart.StockRate = _stockMaster.StockRate;
        _shopcart.StockUnits = _stockMaster.StockUnits;
        _shopcart.DisplayRate = _stockMaster.DisplayRate;
        _shopcart.DisplayUnits = _stockMaster.DisplayUnits;
        _shopcart.StockDetail1 = _stockMaster.StockDetail1;
        _shopcart.StockAmount = _stockMaster.StockAmount;
        _shopcart.StockImgLink = _stockMaster.StockImgLink;
        _shopcart.StockOldPrice = _stockMaster.StockOldPrice;
        _shopcart.DiscountedPrice = _stockMaster.DiscountedPrice;
        this.myKIBShopCart = JSON.parse(localStorage.getItem("myKIBShopCart"));
        if (this.myKIBShopCart === null) {
            localStorage.setItem("myKIBShopCart", JSON.stringify(Array.of(_shopcart)));
            var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
            myCartValue.amt = myCartValue.amt + (_stockMaster.DisplayRate);
            myCartValue.cnt++;
            localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
            this.pagesComponent.CartTotalAmount = myCartValue.amt;
            this.pagesComponent.CartTotalCount = myCartValue.cnt;
            this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
            if (this.myKIBFavCart != null) {
                if (this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }))
                    this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty++;
                localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));
            }
            // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount+(_stockMaster.DisplayRate);
            // this.pagesComponent.CartTotalCount++;
            return;
        }
        var productExistInCart = this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; });
        if (!productExistInCart) {
            this.myKIBShopCart.push(Object.assign(new src_app_shared_model_shoppingcart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"](), _shopcart));
            var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
            myCartValue.amt = myCartValue.amt + (_stockMaster.DisplayRate);
            myCartValue.cnt++;
            localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
            this.pagesComponent.CartTotalAmount = myCartValue.amt;
            this.pagesComponent.CartTotalCount = myCartValue.cnt;
            this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
            if (this.myKIBFavCart != null) {
                if (this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }))
                    this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty++;
                localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));
            }
            // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount+(_stockMaster.DisplayRate);
            // this.pagesComponent.CartTotalCount++;
        }
        else {
            this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; })
                .StockCartQty++;
            var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
            myCartValue.amt = myCartValue.amt + (_stockMaster.DisplayRate);
            localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
            this.pagesComponent.CartTotalAmount = myCartValue.amt;
            this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
            if (this.myKIBFavCart != null) {
                if (this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }))
                    this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty++;
                localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));
            }
            // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount+(_stockMaster.DisplayRate);
        }
        localStorage.setItem("myKIBShopCart", JSON.stringify(this.myKIBShopCart));
    };
    ProductsComponent.prototype.subfromcart = function (_stockMaster) {
        var _shopcart = new src_app_shared_model_shoppingcart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]();
        _shopcart.SpDocSrNo = _stockMaster.SpDocSrNo;
        _shopcart.StockCode = _stockMaster.StockCode;
        _shopcart.StockDesc = _stockMaster.StockDesc;
        _shopcart.StockOrigin = _stockMaster.StockOrigin;
        _shopcart.StockCartQty = _stockMaster.StockCartQty;
        _shopcart.StockRate = _stockMaster.StockRate;
        _shopcart.StockUnits = _stockMaster.StockUnits;
        _shopcart.DisplayRate = _stockMaster.DisplayRate;
        _shopcart.DisplayUnits = _stockMaster.DisplayUnits;
        _shopcart.StockDetail1 = _stockMaster.StockDetail1;
        _shopcart.StockAmount = _stockMaster.StockAmount;
        _shopcart.StockImgLink = _stockMaster.StockImgLink;
        _shopcart.StockOldPrice = _stockMaster.StockOldPrice;
        _shopcart.DiscountedPrice = _stockMaster.DiscountedPrice;
        this.myKIBShopCart = JSON.parse(localStorage.getItem("myKIBShopCart"));
        // if (this.myKIBShopCart === null) {
        //   localStorage.setItem(
        //     "myKIBShopCart",
        //     JSON.stringify(Array.of(_shopcart))
        //   );
        //   return;
        // }
        var productExistInCart = this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; });
        if (productExistInCart) {
            if (this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty > 1) {
                this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty--;
                var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
                myCartValue.amt = myCartValue.amt - (_stockMaster.DisplayRate);
                localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
                this.pagesComponent.CartTotalAmount = myCartValue.amt;
                this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
                if (this.myKIBFavCart != null) {
                    if (this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }))
                        this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty--;
                    localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));
                }
                // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount-(_stockMaster.DisplayRate);
            }
            else {
                this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty--;
                var myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
                myCartValue.amt = myCartValue.amt - (_stockMaster.DisplayRate);
                myCartValue.cnt--;
                localStorage.setItem("myCartValue", JSON.stringify(myCartValue));
                this.pagesComponent.CartTotalAmount = myCartValue.amt;
                this.pagesComponent.CartTotalCount = myCartValue.cnt;
                this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
                if (this.myKIBFavCart != null) {
                    if (this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }))
                        this.myKIBFavCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; }).StockCartQty--;
                    localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));
                }
                // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount-(_stockMaster.DisplayRate);
                // this.pagesComponent.CartTotalCount--;
                this.myKIBShopCart.splice(this.myKIBShopCart.indexOf(this.myKIBShopCart.find(function (a) { return a.StockCode === _stockMaster.StockCode; })), 1);
            }
        }
        localStorage.setItem("myKIBShopCart", JSON.stringify(this.myKIBShopCart));
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_model_stockmaster__WEBPACK_IMPORTED_MODULE_1__["StockMaster"])
    ], ProductsComponent.prototype, "stockMaster", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  color: #fff;\n  text-align: center;\n}\n.cont img {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n}\n.cont h1 {\n  font-size: 36px;\n  font-weight: 400;\n  margin: 0;\n}\n.cont h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 580px;\n  text-align: center;\n  margin: 0 auto;\n}\n.cont bg-image {\n  background-image: url('header-bg.png');\n  background-blend-mode: overlay;\n  background-size: 300px;\n}\n.mat-form-field {\n  margin: 5px;\n}\n.mat-divider {\n  height: 100px;\n  display: block;\n  margin: 2;\n  border-top-width: 2px;\n  border-top-style: double;\n}\nbody {\n  padding: 2em;\n}\n/* Shared */\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);\n}\n/* Kibsons */\n.loginBtn--kibsons {\n  background-color: #0d2c6c;\n  background-image: linear-gradient(#0d2c6c, #0d2c6c);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #0d2c6c;\n}\n.loginBtn--kibsons:before {\n  border-right: black 1px solid;\n  background: url('kibsons.png');\n  background-size: cover;\n}\n.loginBtn--kibsons:hover,\n.loginBtn--kibsons:focus {\n  background-color: #0d2c6c;\n  background-image: linear-gradient(#0d2c6c, #0d2c6c);\n}\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: black 1px solid;\n  background: url('facebook-icon.svg');\n  background-size: cover;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: white;\n  background-image: linear-gradient(#444, #444);\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--google:before {\n  border-right: black 1px solid;\n  background: url('google-icon.svg');\n  background-size: cover;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: white;\n}\n/* Twitter */\n.loginBtn--twitter {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #00acee;\n  background-image: linear-gradient(#00acee, #00acee);\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--twitter:before {\n  border-right: black 1px solid;\n  background: url('twitter-icon.svg');\n  background-size: cover;\n}\n.loginBtn--twitter:hover,\n.loginBtn--twitter:focus {\n  background: #00acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRVI7QURBSTtFQUNJLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0VSO0FER0E7RUFDRSxXQUFBO0FDQUY7QURFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNDRjtBREVBO0VBQU8sWUFBQTtBQ0VQO0FER0EsV0FBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBRjtBREVBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7QUNFRjtBREFBO0VBQ0UsK0NBQUE7QUNHRjtBRENBLFlBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSwrRUFBQTtFQUNBLDZCQUFBO0FDRUo7QURBRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0dKO0FEREU7O0VBRUUseUJBQUE7RUFDQSxtREFBQTtBQ0lKO0FEQUEsYUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxtREFBQTtFQUNBLCtFQUFBO0VBQ0EsNkJBQUE7QUNHRjtBRERBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FDSUY7QURGQTs7RUFFRSx5QkFBQTtFQUNBLG1EQUFBO0FDS0Y7QURGQSxXQUFBO0FBQ0E7RUFDRSxvREFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtBQ0tGO0FESEE7RUFDRSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUNNRjtBREpBOztFQUVFLGlCQUFBO0FDT0Y7QURKQSxZQUFBO0FBQ0E7RUFDSSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSw2QkFBQTtBQ09KO0FETEU7RUFDRSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7QUNRSjtBRE5FOztFQUVFLG1CQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfSBcclxuICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgYmctaW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9hcHAvaGVhZGVyLWJnLnBuZ1wiKTsgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4OyBcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4ubWF0LWRpdmlkZXIgeyAgXHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDI7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGRvdWJsZTtcclxufSAgXHJcblxyXG5ib2R5IHsgcGFkZGluZzogMmVtOyB9XHJcblxyXG5cclxuXHJcblxyXG4vKiBTaGFyZWQgKi9cclxuLmxvZ2luQnRuIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiB3aWR0aDogMTNlbTsgIC0gYXBwbHkgZm9yIGZpeGVkIHNpemUgKi9cclxuICBtYXJnaW46IDAuMmVtO1xyXG4gIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmxvZ2luQnRuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxvZ2luQnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5sb2dpbkJ0bjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLyogS2lic29ucyAqL1xyXG4ubG9naW5CdG4tLWtpYnNvbnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmM2YztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMGQyYzZjLCAjMGQyYzZjKTtcclxuICAgIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMGQyYzZjO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWtpYnNvbnM6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodDogYmxhY2sgMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL2tpYnNvbnMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWtpYnNvbnM6aG92ZXIsXHJcbiAgLmxvZ2luQnRuLS1raWJzb25zOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDJjNmM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzBkMmM2YywgIzBkMmM2Yyk7XHJcbiAgfVxyXG5cclxuXHJcbi8qIEZhY2Vib29rICovXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0QzY5QkEsICMzQjU1QTApO1xyXG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4QztcclxufVxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL2ZhY2Vib29rLWljb24uc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxyXG4ubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcclxufVxyXG5cclxuLyogR29vZ2xlICovXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcclxuICAvKmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0NDQsICM0NDQpO1xyXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG59XHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL2dvb2dsZS1pY29uLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogVHdpdHRlciAqL1xyXG4ubG9naW5CdG4tLXR3aXR0ZXIge1xyXG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDBhY2VlLCAjMDBhY2VlKTtcclxuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG4gIH1cclxuICAubG9naW5CdG4tLXR3aXR0ZXI6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodDogYmxhY2sgMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL3R3aXR0ZXItaWNvbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tdHdpdHRlcjpob3ZlcixcclxuICAubG9naW5CdG4tLXR3aXR0ZXI6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxuICB9XHJcblxyXG4gIiwiLmNvbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnQgaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29udCBoMSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1heC13aWR0aDogNTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udCBiZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwL2hlYWRlci1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDI7XG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogZG91YmxlO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMmVtO1xufVxuXG4vKiBTaGFyZWQgKi9cbi5sb2dpbkJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXG4gIG1hcmdpbjogMC4yZW07XG4gIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubG9naW5CdG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dpbkJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sb2dpbkJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogS2lic29ucyAqL1xuLmxvZ2luQnRuLS1raWJzb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmM2YztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwZDJjNmMsICMwZDJjNmMpO1xuICAvKmZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBuZXVlXCIsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyovXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMGQyYzZjO1xufVxuXG4ubG9naW5CdG4tLWtpYnNvbnM6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4va2lic29ucy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkJ0bi0ta2lic29uczpob3Zlcixcbi5sb2dpbkJ0bi0ta2lic29uczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDJjNmM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMGQyYzZjLCAjMGQyYzZjKTtcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRDNjlCQSwgIzNCNTVBMCk7XG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRDOEM7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4vZmFjZWJvb2staWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXG4ubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xufVxuXG4vKiBHb29nbGUgKi9cbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcbiAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0NDQsICM0NDQpO1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4Qztcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4vZ29vZ2xlLWljb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW5CdG4tLWdvb2dsZTpob3Zlcixcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qIFR3aXR0ZXIgKi9cbi5sb2dpbkJ0bi0tdHdpdHRlciB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgYmFja2dyb3VuZDogIzAwYWNlZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMGFjZWUsICMwMGFjZWUpO1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4Qztcbn1cblxuLmxvZ2luQnRuLS10d2l0dGVyOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogYmxhY2sgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luL3R3aXR0ZXItaWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkJ0bi0tdHdpdHRlcjpob3Zlcixcbi5sb2dpbkJ0bi0tdHdpdHRlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMGFjZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/environment-url.service */ "./src/app/shared/services/environment-url.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_guards_useremail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/guards/useremail.service */ "./src/app/guards/useremail.service.ts");
/* harmony import */ var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appSettings, 
    // public authService: AuthService,
    fb, router, http, envUrl, navigateservice, snackBar, useremailvalidator) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.envUrl = envUrl;
        this.navigateservice = navigateservice;
        this.snackBar = snackBar;
        this.useremailvalidator = useremailvalidator;
        this.errorMessage = '';
        this.startDate = new Date(1990, 0, 1);
        this.btnOTP = true;
        this.genders = [
            { value: 0, name: 'Female' },
            { value: 1, name: 'Male' },
            { value: 3, name: 'Prefer not to disclose' }
        ];
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'firstname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["alphabetValidator"]])],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["alphabetValidator"]])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]]), useremailvalidator.checkUserEmail.bind(useremailvalidator)],
            'cellphone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["numericValidator"]])],
            'verificationcode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'dob': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["dateValidator"]])],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'nationality': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["alphabetValidator"]])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            'confirmpassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]), Object(src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmpassword')]
        });
    }
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
    RegisterComponent.prototype.tryRegister = function (form) {
        var _this = this;
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
            'status': 1
        };
        var obj = JSON.stringify(data);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/signup', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            var token = response.token;
            localStorage.setItem('jwt', token);
            console.log(response);
            _this.invalidLogin = false;
            _this.navigateservice.navigateTo('addressdetails');
            // this.router.navigate(['blank']);
        }, function (err) {
            console.log(err.error);
            _this.invalidLogin = true;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    RegisterComponent.prototype.sendOTP = function () {
        var _this = this;
        var formdata = {
            'OTPReceiver': this.form.value.cellphone,
            'ReceiverType': "toMobile",
            'code': "0"
        };
        var obj = JSON.stringify(formdata);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/SendOTP', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            var control = _this.form.get('cellphone');
            // control.disable();
            _this.btnOTP = false;
            _this.snackBar.open("SMS Sent to : " + formdata.OTPReceiver, "SMS Sent", {
                duration: 5000,
            });
            console.log(response);
        }, function (err) {
            var control = _this.form.get('cellphone');
            control.enable();
            _this.snackBar.open(err.error.text, "SMS Error", {
                duration: 3000,
            });
            _this.btnOTP = true;
            _this.invalidLogin = true;
        });
    };
    RegisterComponent.prototype.onBlur = function ($event) {
        var _this = this;
        var formdata = {
            'OTPReceiver': this.form.value.cellphone,
            'ReceiverType': "toMobile",
            'code': this.form.value.verificationcode
        };
        var obj = JSON.stringify(formdata);
        this.http.post(this.envUrl.urlAddress + '/kibsonsapi/VerifyOTP', obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            _this.snackBar.open("Verified Successfully !!!", "OTP Verification", {
                duration: 5000,
            });
        }, function (err) {
            var control = _this.form.get('verificationcode');
            control.setErrors;
            console.log(control.setErrors);
            _this.snackBar.open(err.error, "OTP Verification", {
                duration: 5000,
            });
            _this.invalidLogin = true;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"] },
        { type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_9__["NavigateService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: src_app_guards_useremail_service__WEBPACK_IMPORTED_MODULE_8__["UseremailValidator"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_shared_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"],
            src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_9__["NavigateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], src_app_guards_useremail_service__WEBPACK_IMPORTED_MODULE_8__["UseremailValidator"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/shopping/shopping.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/shopping/shopping.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nL3Nob3BwaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/shopping/shopping.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/shopping/shopping.component.ts ***!
  \******************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_model_stockmaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/stockmaster */ "./src/app/shared/model/stockmaster.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/repository.service */ "./src/app/shared/services/repository.service.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var src_app_shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notifyscroll.service */ "./src/app/shared/services/notifyscroll.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingComponent = /** @class */ (function () {
    // @Input()
    // @ViewChild('innerTemplate',{static: true})
    // public innerTemplate: TemplateRef<any>;
    function ShoppingComponent(ngZone, router, http, repService, 
    // public bugService: BugService,
    activatedRoute, pagesComponent, element, notifyScrollService) {
        this.ngZone = ngZone;
        this.router = router;
        this.http = http;
        this.repService = repService;
        this.activatedRoute = activatedRoute;
        this.pagesComponent = pagesComponent;
        this.element = element;
        this.notifyScrollService = notifyScrollService;
        this.apiURL = "/api/Item/getItems";
        this.searchType = "";
        this.searchItem = "";
        this._height = 600;
        this._loadMore = 15;
        // public CartTotalAmount: number =0;
        // public CartTotalCount : number =0;
        // public TotalFavCount : number =0;
        this.tmpProductsArry = [];
        this.ProductsArry = [];
        this.CategoryArry = [];
        this.FeaturedArry = [];
        this.slideConfigFeatured = {
            slidesToShow: 8,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            autoplay: true,
            arrows: false,
            responsive: [{ breakpoint: 500, settings: { slidesToShow: 4 } }],
        };
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.notifyScrollService.notifyObservable$.subscribe(function (res) {
            if (res.hasOwnProperty("option") && res.option === "call_child") {
                // console.log(res.value);
                // perform your other action from here
                _this.pageScrolled(res.value);
            }
        });
        this.loadProducts();
    };
    ShoppingComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingComponent.prototype.pageScrolled = function (varpageYOffset) {
        var _this = this;
        // console.log("YOffset "+varpageYOffset);
        if (varpageYOffset > this._height) {
            // console.log('loading more..')
            this._height = this._height + 1300;
            // console.log("Height " +this._height);
            // console.log("YOffset "+varpageYOffset);
            this.ProductsArry = [];
            //this.ProductsArry.push(this.tmpProductsArry.slice(0, 50))
            this._loadMore = this._loadMore + 15;
            this.ngZone.run(function () {
                return (_this.ProductsArry = _this.tmpProductsArry.slice(0, _this._loadMore));
            });
            // console.log("PrdAry Len "+this.ProductsArry.length );
            // console.log("TMPPrdAry Len "+this.tmpProductsArry.length );
        }
    };
    ShoppingComponent.prototype.loadProducts = function () {
        var _this = this;
        this.CategoryArry = JSON.parse(localStorage.getItem("setTmpCategorydArry"));
        this.FeaturedArry = JSON.parse(localStorage.getItem("setTmpFeaturedArry"));
        this.activatedRoute.params.subscribe(function (params) {
            _this.searchType = params["type"];
            _this.searchItem = params["item"];
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append("_userDocType", "CCSUR");
        params = params.append("_userDocNo", "1027");
        params = params.append("_category", "");
        params = params.append("_searchType", "");
        params = params.append("_SearchPram", "");
        params = params.append("_language", "en");
        var formData = new FormData();
        formData.append("_userDocType", "CCSUR");
        formData.append("_userDocNo", "1027");
        formData.append("_category", "fruits");
        formData.append("_searchType", "");
        formData.append("_SearchPram", "");
        formData.append("_language", "en");
        // formData.append("_language","ar");
        this.repService.callingSecureApi(formData, this.apiURL).subscribe(function (res) {
            var data = res.Data;
            // let table0 = data["productData"];
            var myKIBShopCart = JSON.parse(localStorage.getItem("myKIBShopCart"));
            var myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
            var _loop_1 = function (result) {
                if (myKIBShopCart != null) {
                    var productExistInCart = myKIBShopCart.find(function (a) { return a.StockCode === result.StockCode; });
                    if (productExistInCart) {
                        result.StockCartQty += myKIBShopCart.find(function (a) { return a.StockCode === result.StockCode; }).StockCartQty;
                    }
                }
                if (myKIBFavCart != null) {
                    var productExistInCart = myKIBFavCart.find(function (a) { return a.StockCode === result.StockCode; });
                    if (productExistInCart) {
                        result.StockFavourites = "YES";
                    }
                }
                _this.tmpProductsArry.push(Object.assign(new src_app_shared_model_stockmaster__WEBPACK_IMPORTED_MODULE_2__["StockMaster"](), result));
                _this.ProductsArry = _this.tmpProductsArry.slice(0, _this._loadMore);
            };
            for (var _i = 0, _a = data["productData"]; _i < _a.length; _i++) {
                var result = _a[_i];
                _loop_1(result);
            }
        });
    };
    ShoppingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_shared_services_repository_service__WEBPACK_IMPORTED_MODULE_4__["RepositoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: src_app_shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_6__["NotifyScrollService"] }
    ]; };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-shopping",
            template: __webpack_require__(/*! raw-loader!./shopping.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/shopping/shopping.component.html"),
            styles: [__webpack_require__(/*! ./shopping.component.scss */ "./src/app/pages/shopping/shopping.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_shared_services_repository_service__WEBPACK_IMPORTED_MODULE_4__["RepositoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_shared_services_notifyscroll_service__WEBPACK_IMPORTED_MODULE_6__["NotifyScrollService"]])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/pages/test/test.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/test/test.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  height: auto;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC9FOlxcUmFtZXNoXFxLaWJzb25zV0VCL3NyY1xcYXBwXFxwYWdlc1xcdGVzdFxcdGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0Usc0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXN0L3Rlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAiLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/test/test.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test/test.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/pages/test/test.component.scss")]
        })
    ], TestComponent);
    return TestComponent;
}());

var ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
];


/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  font-size: 13px;\n}\n.breadcrumb a {\n  text-decoration: none;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxcc2hhcmVkXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1ie1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgfVxyXG59IiwiLmJyZWFkY3J1bWIge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYnJlYWRjcnVtYiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJyZWFkY3J1bWIgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nOiAwIDZweDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGNvbnRlbnQ6IFwiL1wiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title, menuService) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.menuService = menuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = '';
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        if (this.settings.menu === 'vertical') {
            this.menuService.closeAllSubMenus();
        }
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] }
    ]; };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html"),
            providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/content-header/content-header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header {\n  color: #fff;\n  text-align: center;\n}\n.content-header img {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n}\n.content-header h1 {\n  font-size: 36px;\n  font-weight: 400;\n  margin: 0;\n}\n.content-header h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 580px;\n  text-align: center;\n  margin: 0 auto;\n}\n.content-header.bg-image {\n  background-image: url('header-bg.png');\n  background-blend-mode: overlay;\n  background-size: 300px;\n}\n@media screen and (min-width: 960px) {\n  .content-header img {\n    width: 150px;\n    height: 150px;\n  }\n  .content-header h1 {\n    font-size: 48px;\n  }\n  .content-header h4 {\n    font-size: 18px;\n  }\n  .content-header.has-bg-image {\n    background-size: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRlbnQtaGVhZGVyL0U6XFxSYW1lc2hcXEtpYnNvbnNXRUIvc3JjXFxhcHBcXHNoYXJlZFxcY29udGVudC1oZWFkZXJcXGNvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRVI7QURBSTtFQUNJLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0VSO0FER0E7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDRFY7RURHTTtJQUNJLGVBQUE7RUNEVjtFREdNO0lBQ0ksZUFBQTtFQ0RWO0VER007SUFDSSxzQkFBQTtFQ0RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9IFxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAmLmJnLWltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwL2hlYWRlci1iZy5wbmdcIik7ICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMDBweDsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgeyAgICBcclxuICAgIC5jb250ZW50LWhlYWRlcntcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaGFzLWJnLWltYWdle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ4MHB4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29udGVudC1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbnRlbnQtaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG4uY29udGVudC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1heC13aWR0aDogNTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGVudC1oZWFkZXIuYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2FwcC9oZWFkZXItYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5jb250ZW50LWhlYWRlciBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC5jb250ZW50LWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIC5jb250ZW50LWhlYWRlciBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5jb250ZW50LWhlYWRlci5oYXMtYmctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDgwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/content-header/content-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentHeaderComponent = /** @class */ (function () {
    function ContentHeaderComponent() {
    }
    ContentHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('icon'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('desc'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "desc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hideBreadcrumb'),
        __metadata("design:type", Boolean)
    ], ContentHeaderComponent.prototype, "hideBreadcrumb", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hasBgImage'),
        __metadata("design:type", Boolean)
    ], ContentHeaderComponent.prototype, "hasBgImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('class'),
        __metadata("design:type", Object)
    ], ContentHeaderComponent.prototype, "class", void 0);
    ContentHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-header',
            template: __webpack_require__(/*! raw-loader!./content-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/content-header/content-header.component.html"),
            styles: [__webpack_require__(/*! ./content-header.component.scss */ "./src/app/shared/content-header/content-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentHeaderComponent);
    return ContentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/shoppingcart.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/shoppingcart.ts ***!
  \**********************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/shared/model/stockmaster.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/stockmaster.ts ***!
  \*********************************************/
/*! exports provided: StockMaster, AppMenus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMaster", function() { return StockMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenus", function() { return AppMenus; });
var StockMaster = /** @class */ (function () {
    function StockMaster() {
    }
    return StockMaster;
}());

var AppMenus = /** @class */ (function () {
    function AppMenus() {
    }
    return AppMenus;
}());



/***/ }),

/***/ "./src/app/shared/services/environment-url.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/environment-url.service.ts ***!
  \************************************************************/
/*! exports provided: EnvironmentUrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentUrlService", function() { return EnvironmentUrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnvironmentUrlService = /** @class */ (function () {
    function EnvironmentUrlService() {
        this.urlAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAddress;
    }
    EnvironmentUrlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EnvironmentUrlService);
    return EnvironmentUrlService;
}());



/***/ }),

/***/ "./src/app/shared/services/navigate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/navigate.service.ts ***!
  \*****************************************************/
/*! exports provided: NavigateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigateService = /** @class */ (function () {
    function NavigateService(zone, router) {
        this.zone = zone;
        this.router = router;
    }
    NavigateService.prototype.navigateTo = function (arg) {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl("/" + arg);
            // this.router.navigate(['blank']);
        });
    };
    NavigateService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    NavigateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigateService);
    return NavigateService;
}());



/***/ }),

/***/ "./src/app/shared/services/notifyscroll.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notifyscroll.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyScrollService", function() { return NotifyScrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifyScrollService = /** @class */ (function () {
    function NotifyScrollService() {
        this.notify = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Observable string streams
         */
        this.notifyObservable$ = this.notify.asObservable();
    }
    NotifyScrollService.prototype.notifyOther = function (data) {
        if (data) {
            this.notify.next(data);
        }
    };
    NotifyScrollService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotifyScrollService);
    return NotifyScrollService;
}());



/***/ }),

/***/ "./src/app/shared/services/repository.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/repository.service.ts ***!
  \*******************************************************/
/*! exports provided: Bug, RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bug", function() { return Bug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environment_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment-url.service */ "./src/app/shared/services/environment-url.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Bug = /** @class */ (function () {
    function Bug() {
    }
    return Bug;
}());

var RepositoryService = /** @class */ (function () {
    function RepositoryService(http, envUrl) {
        this.http = http;
        this.envUrl = envUrl;
        this.baseurl = 'https://kibsons.com/ios';
    }
    RepositoryService.prototype.getData = function (route) {
        return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress));
    };
    RepositoryService.prototype.create = function (route, body) {
        return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.callingSecureApi = function (formData, Url) {
        return this.http.post(this.baseurl + Url, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    };
    RepositoryService.prototype.update = function (route, body) {
        return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.delete = function (route) {
        return this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
    };
    RepositoryService.prototype.createCompleteRoute = function (route, envAddress) {
        return envAddress + "/" + route;
    };
    RepositoryService.prototype.generateHeaders = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    };
    RepositoryService.prototype.errorHandl = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        // console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    RepositoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _environment_url_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentUrlService"] }
    ]; };
    RepositoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _environment_url_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentUrlService"]])
    ], RepositoryService);
    return RepositoryService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/shared/snack-bar/snack-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"]
            ],
            exports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"]
            ],
            declarations: [
                _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__["SnackBarComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent(appSettings, snackBar) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.settings = this.appSettings.settings;
    }
    SnackBarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
    ]; };
    SnackBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snack-bar',
            template: __webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/snack-bar/snack-bar.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarComponent);
    return SnackBarComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".applications {\n  width: 260px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n  line-height: 1.7;\n  font-weight: 400;\n  width: 100%;\n  border-radius: 0;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.applications .mat-card .mat-button .mat-button-wrapper .mat-icon {\n  padding: 8px;\n  color: #fff;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uc1xcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURBSTtFQUNJLFVBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBREZZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNJaEI7QURIZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDS3BCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2F0aW9uc3tcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIC5tYXQtY2FyZHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYXBwbGljYXRpb25zIHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLmFwcGxpY2F0aW9ucyAubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuLmFwcGxpY2F0aW9ucyAubWF0LWNhcmQgLm1hdC1idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmFwcGxpY2F0aW9ucyAubWF0LWNhcmQgLm1hdC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCAubWF0LWJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIC5tYXQtaWNvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! raw-loader!./applications.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/applications/applications.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./applications.component.scss */ "./src/app/theme/components/applications/applications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L0U6XFxSYW1lc2hcXEtpYnNvbnNXRUIvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxmbGFncy1tZW51XFxmbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2ZsYWdzLW1lbnUvZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L2ZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxhZ3N7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn0iLCIuZmxhZ3MgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZmxhZ3MgLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent.prototype.changeLanguage = function (varlang, rtl) {
        if (rtl) {
            this.appSettings.settings.rtl = true;
        }
        else {
            this.appSettings.settings.rtl = false;
        }
        // RouterLink[varlang];
    };
    FlagsMenuComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FlagsMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__(/*! raw-loader!./flags-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/flags-menu/flags-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./flags-menu.component.scss */ "./src/app/theme/components/flags-menu/flags-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var document = window.document;
var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
    }
    // @ViewChild('expand') private expand:ElementRef;
    // @ViewChild('compress') private compress:ElementRef;
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    FullScreenComponent.prototype.getFullscreen = function () {
        // if(this.expand){
        //     this.requestFullscreen(document.documentElement);
        // }
        // if(this.compress){
        //     this.exitFullscreen();
        // }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button>\n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-menu-item {\n  font-family: KibsonsSB;\n  font-size: 11px;\n  color: #0d2c6c;\n  position: relative;\n  width: 100%;\n}\n.horizontal-menu-item .mat-button {\n  height: 40;\n  font-weight: 500;\n  border-radius: 0;\n}\n.horizontal-menu-item .mat-button.parent-item .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.horizontal-menu-item .mat-button.parent-item .horizontal-menu-icon {\n  padding: 2px;\n  border-radius: 50%;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 8px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  z-index: 2;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9FOlxcUmFtZXNoXFxLaWJzb25zV0VCL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVudVxcaG9yaXpvbnRhbC1tZW51XFxob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ2hCO0FEQ1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFHQSxxQ0FBQTtBQ0RSO0FERVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FaO0FESUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7QURHQTtFQUNJLFVBQUE7RUFDQSxNQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbXtcclxuICAgIGZvbnQtZmFtaWx5OiBLaWJzb25zU0I7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzBkMmM2YztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiA0MDsgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICYucGFyZW50LWl0ZW17ICAgICAgICBcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhvcml6b250YWwtbWVudS1pY29ue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4OyBcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbTpob3ZlciA+IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4uaG9yaXpvbnRhbC1zdWItbWVudSAuaG9yaXpvbnRhbC1zdWItbWVudXtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn0iLCIuaG9yaXpvbnRhbC1tZW51LWl0ZW0ge1xuICBmb250LWZhbWlseTogS2lic29uc1NCO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMGQyYzZjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvcml6b250YWwtbWVudS1pdGVtIC5tYXQtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAubWF0LWJ1dHRvbi5wYXJlbnQtaXRlbSAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLm1hdC1idXR0b24ucGFyZW50LWl0ZW0gLmhvcml6b250YWwtbWVudS1pY29uIHtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLmhvcml6b250YWwtbWVudS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLmhvcml6b250YWwtc3ViLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTBweDtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLmhvcml6b250YWwtc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uaG9yaXpvbnRhbC1tZW51LWl0ZW06aG92ZXIgPiAuaG9yaXpvbnRhbC1zdWItbWVudSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmhvcml6b250YWwtc3ViLW1lbnUgLmhvcml6b250YWwtc3ViLW1lbnUge1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(function (item) { return item.parentId === _this.menuParentId; });
    };
    HorizontalMenuComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] },
        { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuParentId", void 0);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__(/*! raw-loader!./horizontal-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
            styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    Menu.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Number }
    ]; };
    return Menu;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService(location, router) {
        this.location = location;
        this.router = router;
    }
    MenuService.prototype.getVerticalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    };
    MenuService.prototype.getHorizontalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    };
    MenuService.prototype.expandActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = url; // url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var menuItem_1 = activeMenuItem[0];
            while (menuItem_1.parentId !== 0) {
                var parentMenuItem = menu.filter(function (item) { return item.id === menuItem_1.parentId; })[0];
                menuItem_1 = parentMenuItem;
                this.toggleMenuItem(menuItem_1.id);
            }
        }
    };
    MenuService.prototype.toggleMenuItem = function (menuId) {
        var menuItem = document.getElementById('menu-item-' + menuId);
        var subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    };
    MenuService.prototype.closeOtherSubMenus = function (menu, menuId) {
        var currentMenuItem = menu.filter(function (item) { return item.id === menuId; })[0];
        if (currentMenuItem.parentId === 0 && !currentMenuItem.target) {
            menu.forEach(function (item) {
                if (item.id !== menuId) {
                    var subMenu = document.getElementById('sub-menu-' + item.id);
                    var menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    };
    MenuService.prototype.closeAllSubMenus = function () {
        var menu = document.getElementById('vertical-menu');
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    MenuService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");

var verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'HOME', '/shopping', null, 'Shopping', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'OUT HISTORY', '/login', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'KIBSONS CARES', '/register', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'PRODUCTS', '/blank', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'FEATURED PRODUCTS', '/test', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'MY KIBSONS', '/test', null, null, null, false, 0),
];
var horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'HOME', '/shopping', null, 'Shopping', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'OUT HISTORY', '/', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'KIBSONS CARES', '/', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'PRODUCTS', '/', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'FEATURED PRODUCTS', '/', null, null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'MY KIBSONS', '/address', null, null, null, false, 0),
];


/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px;\n}\n\n.menu-item .mat-button {\n  font-family: Kibfonts;\n  padding: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  width: 100%;\n  font-weight: 400;\n  border-radius: 0;\n}\n\n.menu-item .mat-button .menu-icon {\n  margin-right: 12px;\n  padding: 7px;\n  border-radius: 50%;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 900px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXHZlcnRpY2FsLW1lbnVcXHZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L0U6XFxSYW1lc2hcXEtpYnNvbnNXRUIvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNESjs7QURLSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBREdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURJWTtFQUdJLHlCQUFBO0FDRmhCOztBRE1JO0VBQ0ksa0JBQUE7QUNKUjs7QURRQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUdBLHFDQUFBO0FDTko7O0FDL0JRO0VBS1Esa0JBQUE7QUQ2QmhCOztBQ2xDUTtFQUtRLGtCQUFBO0FEZ0NoQjs7QUNyQ1E7RUFLUSxrQkFBQTtBRG1DaEI7O0FDeENRO0VBS1EsbUJBQUE7QURzQ2hCOztBQzNDUTtFQUtRLG1CQUFBO0FEeUNoQjs7QUM5Q1E7RUFLUSxtQkFBQTtBRDRDaEI7O0FDakRRO0VBS1EsbUJBQUE7QUQrQ2hCOztBQ3BEUTtFQUtRLG1CQUFBO0FEa0RoQjs7QUN2RFE7RUFLUSxtQkFBQTtBRHFEaEI7O0FEcEJJO0VBQ0ksa0JBQUE7QUNzQlI7O0FEcEJJO0VBQ0ksaUJBQUE7RUFHQSxvQ0FBQTtBQ3NCUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTNweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBmb250LWZhbWlseTogS2liZm9udHM7XHJcbiAgICAgICAgcGFkZGluZzogMDsgICAgXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4OyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLm1lbnUtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIC5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgbWVudS1sZXZlbC1wYWRkaW5nKCdsdHInKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59IiwiLm1lbnUtZXhwYW5kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEzcHg7XG59XG5cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24ge1xuICBmb250LWZhbWlseTogS2liZm9udHM7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbiAubWVudS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24uZXhwYW5kZWQgLm1lbnUtZXhwYW5kLWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnN1Yi1tZW51IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTQwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxODBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG59XG4uc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uc3ViLW1lbnUuc2hvdyB7XG4gIG1heC1oZWlnaHQ6IDkwMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId === _this.menuParentId; });
    };
    VerticalMenuComponent.prototype.onClick = function (menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    VerticalMenuComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] },
        { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuParentId", void 0);
    VerticalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__(/*! raw-loader!./vertical-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
            styles: [__webpack_require__(/*! ./vertical-menu.component.scss */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-block img {\n  border-radius: 50%;\n  width: 95px;\n  height: 95px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.user-block h2 {\n  font-size: 16px;\n  font-weight: 400;\n}\n.user-block p {\n  font-size: 13px;\n}\n.sidenav-menu-outer {\n  height: 100%;\n}\n#vertical-menu.ps {\n  height: calc(100% - 180px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0U6XFxSYW1lc2hcXEtpYnNvbnNXRUIvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FER0E7RUFDSSxZQUFBO0FDQUo7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWJsb2Nre1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogOTVweDtcclxuICAgICAgICBoZWlnaHQ6IDk1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG4uc2lkZW5hdi1tZW51LW91dGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxufVxyXG4jdmVydGljYWwtbWVudS5wc3tcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpO1xyXG59IiwiLnVzZXItYmxvY2sgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnVzZXItYmxvY2sgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udXNlci1ibG9jayBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2lkZW5hdi1tZW51LW91dGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jdmVydGljYWwtbWVudS5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.psConfig = {
            wheelPropagation: true
        };
        this.settings = this.appSettings.settings;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.menuItems = this.menuService.getVerticalMenuItems();
    };
    SidenavComponent.prototype.ngDoCheck = function () {
        if (this.settings.fixedSidenav) {
            if (this.psConfig.wheelPropagation === true) {
                this.psConfig.wheelPropagation = false;
            }
        }
        else {
            if (this.psConfig.wheelPropagation === false) {
                this.psConfig.wheelPropagation = true;
            }
        }
    };
    SidenavComponent.prototype.closeSubMenus = function () {
        var menu = document.getElementById('vertical-menu');
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    SidenavComponent.ctorParameters = function () { return [
        { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] },
        { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/sidenav/sidenav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/theme/components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu .user-info {\n  height: 100px;\n  width: 250px;\n  box-shadow: none !important;\n}\n.user-menu .user-info img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.user-menu .user-info h2 {\n  font-size: 16px;\n  font-weight: 400;\n}\n.user-menu .user-info h3 {\n  font-size: 14px;\n  font-weight: 400;\n}\n.user-menu .user-info p {\n  font-size: 12px;\n}\n.user-menu .mat-menu-item {\n  font-size: 14px;\n  height: 36px;\n  line-height: 36px;\n}\n.kib-top-header {\n  background-color: #0d2c6c;\n  color: #fff;\n  line-height: 46px;\n  text-decoration: none !important;\n  width: 100%;\n  font-family: Kibfonts !important;\n}\n.kib-top-header img {\n  height: 25px;\n  width: auto;\n  margin: auto 15px auto 0px;\n}\n.kib-top-header .free-delivery {\n  width: 25%;\n  float: left;\n  display: inline-flex;\n  border-right: 1px solid #fff;\n  height: 50px;\n}\n.kib-top-header p {\n  color: #fff;\n  font-size: 15px;\n  line-height: 50px;\n}\n.kib-top-header i {\n  color: #fff;\n  font-size: 25px;\n  line-height: 50px;\n  margin-right: 20px;\n}\n.kib-top-header .callus {\n  width: 15%;\n  float: left;\n  display: inline-flex;\n  border-right: 1px solid #fff;\n  height: 50px;\n  padding: 0px 15px;\n}\n.kib-top-header .callus i {\n  color: #fff;\n  font-size: 20px;\n  line-height: 50px;\n}\n.kib-top-header .social-icons2 {\n  width: 25%;\n  float: left;\n  display: inline-flex;\n  border-right: 1px solid #fff;\n  height: 50px;\n  padding: 0px 15px;\n}\n.kib-top-header .social-icons2 i {\n  color: #fff;\n  font-size: 20px;\n  line-height: 50px;\n  margin: 0px 0px 0px 20px;\n}\n.kib-top-header .top-login {\n  width: 20%;\n  float: left;\n  display: inline-flex;\n  height: 50px;\n  padding: 0px 15px;\n}\n.kib-top-header .top-login i {\n  color: #fff;\n  font-size: 20px;\n  line-height: 50px;\n  margin: 0px 0px 0px 10px;\n}\n.kib-top-header .top-login a {\n  color: #fff;\n  font-size: 15px;\n  line-height: 50px;\n}\n.del-fresh-icon {\n  width: 15%;\n  float: left;\n  display: inline-flex;\n  height: 50px;\n}\n.del-fresh-icon img {\n  width: 100%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvRTpcXFJhbWVzaFxcS2lic29uc1dFQi9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7QUNDWjtBREVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FSO0FESUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDREo7QURJSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNEUjtBRElJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0RSO0FESUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RaO0FESUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDRFo7QURJSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDRFo7QURJUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNEWjtBRElBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNESjtBRElJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW1lbnV7XHJcbiAgICAudXNlci1pbmZve1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgICAgICAgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5raWItdG9wLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQyYzZjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogS2liZm9udHMgIWltcG9ydGFudDtcclxufVxyXG5cclxuICAgIC5raWItdG9wLWhlYWRlciBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IGF1dG8gMTVweCBhdXRvIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgLmZyZWUtZGVsaXZlcnkge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmtpYi10b3AtaGVhZGVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgLmNhbGx1cyB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLmtpYi10b3AtaGVhZGVyIC5jYWxsdXMgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAua2liLXRvcC1oZWFkZXIgLnNvY2lhbC1pY29uczIge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC5raWItdG9wLWhlYWRlciAuc29jaWFsLWljb25zMiBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLmtpYi10b3AtaGVhZGVyIC50b3AtbG9naW4ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICAua2liLXRvcC1oZWFkZXIgLnRvcC1sb2dpbiBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5raWItdG9wLWhlYWRlciAudG9wLWxvZ2luIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4uZGVsLWZyZXNoLWljb24ge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiAgICAuZGVsLWZyZXNoLWljb24gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAiLCIudXNlci1tZW51IC51c2VyLWluZm8ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi51c2VyLW1lbnUgLnVzZXItaW5mbyBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4udXNlci1tZW51IC51c2VyLWluZm8gaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udXNlci1tZW51IC51c2VyLWluZm8gaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udXNlci1tZW51IC51c2VyLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi51c2VyLW1lbnUgLm1hdC1tZW51LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5raWItdG9wLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDJjNmM7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogS2liZm9udHMgIWltcG9ydGFudDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0byAxNXB4IGF1dG8gMHB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgLmZyZWUtZGVsaXZlcnkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgLmNhbGx1cyB7XG4gIHdpZHRoOiAxNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIC5jYWxsdXMgaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgLnNvY2lhbC1pY29uczIge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAuc29jaWFsLWljb25zMiBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcbn1cblxuLmtpYi10b3AtaGVhZGVyIC50b3AtbG9naW4ge1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5raWItdG9wLWhlYWRlciAudG9wLWxvZ2luIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xufVxuXG4ua2liLXRvcC1oZWFkZXIgLnRvcC1sb2dpbiBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5kZWwtZnJlc2gtaWNvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZGVsLWZyZXNoLWljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_guards_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/user.service */ "./src/app/guards/user.service.ts");
/* harmony import */ var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from 'src/app/guards/auth.service';



var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(route, router, userService, navigateservice) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.navigateservice = navigateservice;
    }
    UserMenuComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getCurrentUser();
    };
    UserMenuComponent.prototype.logout = function () {
        localStorage.removeItem("jwt");
        localStorage.removeItem("FaceBookSocialUser");
        localStorage.removeItem("GoogleSocialUser");
        this.navigateservice.navigateTo('');
        // this.router.navigate(['']);
    };
    UserMenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_guards_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] }
    ]; };
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! raw-loader!./user-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/user-menu/user-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/theme/components/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_guards_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/pipes/pagination/pagination.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
  \***********************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationPipe = /** @class */ (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    };
    PaginationPipe.prototype.paginate = function (array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    PaginationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pagination'
        })
    ], PaginationPipe);
    return PaginationPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.pipe */ "./src/app/theme/pipes/pagination/pagination.pipe.ts");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
            ],
            exports: [
                _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilePicturePipe = /** @class */ (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    ProfilePicturePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'profilePicture' })
    ], ProfilePicturePipe);
    return ProfilePicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatPersonSearchPipe = /** @class */ (function () {
    function ChatPersonSearchPipe() {
    }
    ChatPersonSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (message) {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    };
    ChatPersonSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ChatPersonSearchPipe' })
    ], ChatPersonSearchPipe);
    return ChatPersonSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    MailSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (user) {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    };
    UserSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'UserSearchPipe', pure: false })
    ], UserSearchPipe);
    return UserSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? parseInt(args, 10) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/theme/utils/app-animation.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/utils/app-animation.ts ***!
  \**********************************************/
/*! exports provided: blockTransition, listTransition, rotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockTransition", function() { return blockTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTransition", function() { return listTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var blockTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('blockTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)', opacity: 0 })),
        ]), { optional: true }),
    ])
]);
var listTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0, transform: 'translateY(-75px)', offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1, transform: 'translateY(0)', offset: 1
                })
            ]))
        ]), { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1, transform: 'translateY(0)', offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0, transform: 'translateY(-75px)', offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);
var rotate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotate', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
]);


/***/ }),

/***/ "./src/app/theme/utils/app-validators.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/*! exports provided: emailValidator, alphabetValidator, numericValidator, alphanumericValidator, dateValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphabetValidator", function() { return alphabetValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericValidator", function() { return numericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphanumericValidator", function() { return alphanumericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateValidator", function() { return dateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function alphabetValidator(control) {
    var alphabetRegexp = /^[A-Za-z ]+$/;
    if (control.value && !alphabetRegexp.test(control.value)) {
        return { invalidalphabet: true };
    }
}
function numericValidator(control) {
    var alphabetRegexp = /^[0-9]+$/;
    if (control.value && !alphabetRegexp.test(control.value)) {
        return { invalidnumeric: true };
    }
}
function alphanumericValidator(control) {
    var alphanumericRegexp = /[a-zA-Z0-9]+$/;
    if (control.value && !alphanumericRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function dateValidator(control) {
    var emailRegexp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidDate: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "./src/app/theme/utils/custom-overlay-container.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomOverlayContainer = /** @class */ (function (_super) {
    __extends(CustomOverlayContainer, _super);
    function CustomOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    };
    CustomOverlayContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomOverlayContainer);
    return CustomOverlayContainer;
}(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDg3VC9A1GKF-f_CZGiyRTMzkmJ77BEJdM",
        authDomain: "kibsons-authentication.firebaseapp.com",
        databaseURL: "",
        projectId: "kibsons-authentication",
        storageBucket: "",
        messagingSenderId: "765623504677"
    },
    urlAddress: 'http://localhost:5000',
    // urlAddress: 'https://kibsonsit.github.io/',
    googleLoginProvider: '765623504677-7ikt7igooq72ksqbk02u3rcs5q6jvcmq.apps.googleusercontent.com',
    facebookLoginProvider: '259168315327232'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
// if (window['Zone']) {
//   bootstrap();
// // otherwise, wait to bootstrap the app until zone.js is imported
// } else {
//   import('zone.js/dist/zone')
//       .then(() => bootstrap());
// }
// function bootstrap() {
//   platformBrowserDynamic().bootstrapModule(AppModule)
//       .catch(err => console.log(err));
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Ramesh\KibsonsWEB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map