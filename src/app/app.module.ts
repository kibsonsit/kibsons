import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { AuthGuardService } from './guards/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { JwtModule } from "@auth0/angular-jwt";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing, routes } from './app.routing';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';
import { NavigateService} from './shared/services/navigate.service';
import { NotifyScrollService} from './shared/services/notifyscroll.service';
// import { LoginComponent,DialogForgotPass }  from './shared/login/login.component';

import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { NgxSpinnerModule} from 'ngx-spinner';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-AE';
import localeArExtra from '@angular/common/locales/extra/ar-AE';

registerLocaleData(localeAr, 'ar-AE', localeArExtra);


import { TestComponent } from './pages/test/test.component';

import { environment} from '../environments/environment';
import { AuthService } from './guards/auth.service';
import { UserService } from './guards/user.service';
// import { LoginComponent,DialogForgotPass } from './pages/login/login.c omponent';
import { RegisterComponent } from './pages/register/register.component';
import { UseremailValidator } from './guards/useremail.service';
import { DeliverylocationComponent } from './pages/deliverylocation/deliverylocation.component';
import { AddressdetailsComponent, DialogOpenMap } from './pages/addressdetails/addressdetails.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/productdetails/productdetails.component';
import { MyWishListComponent } from './pages/mywishlist/mywishlist.component';
import { MyShopCartComponent } from './pages/myshopcart/myshopcart.component';
import { MyitemsComponent } from './pages/myitems/myitems.component';
import { ConfirmOrderComponent } from './pages/confirmorder/confirmorder.component';
import { PayMyCartComponent } from './pages/paymycart/paymycart.component';
import { RouterModule } from '@angular/router';
import { LoginComponent, DialogForgotPass } from './shared/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { KibsonscaresComponent } from './pages/kibsonscares/kibsonscares.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};


// provider: new GoogleLoginProvider("765623504677-7ikt7igooq72ksqbk02u3rcs5q6jvcmq.apps.googleusercontent.com")
// provider: new FacebookLoginProvider("259168315327232")

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    PerfectScrollbarModule,
    SharedModule,
    PipesModule,
    DragDropModule,
    routing,
    NgxDatatableModule,
    MatDialogModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    NgSelectModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top',}),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000",'https://kibsonsit.github.io/kibsons/'],
        blacklistedRoutes: []
      }
    }),
    // GoogleMapsModule
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCJJyHVxPiA4OvqD4Qbvu5wxSoyurW00cg',
      apiKey:'AIzaSyCJJyHVxPiA4OvqD4Qbvu5wxSoyurW00cg',
      language: 'en',
      libraries: ['places']
    })
   
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    // LoginComponent,
    BlankComponent,
    NotFoundComponent,
    ErrorComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    UserMenuComponent,   
    TestComponent,   
    RegisterComponent,
    // DialogForgotPass,
    DeliverylocationComponent,
    AddressdetailsComponent,
    DialogOpenMap,
    ShoppingComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MyShopCartComponent,
    MyWishListComponent,
    MyitemsComponent,
    ConfirmOrderComponent,
    PayMyCartComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    KibsonscaresComponent
    
  ],
  providers: [
    AppSettings,
    AuthGuardService,
    AuthService,
    UserService,
    EnvironmentUrlService,
    NavigateService,
    NotifyScrollService,
    UseremailValidator,
    RepositoryService,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AppComponent,DialogOpenMap,LoginComponent
  ]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
