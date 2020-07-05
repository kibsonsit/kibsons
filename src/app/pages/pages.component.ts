import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Inject,
  EventEmitter,
} from "@angular/core";
import { Router, NavigationEnd, RouterState } from "@angular/router";
import {
  PerfectScrollbarDirective,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { AppSettings } from "../app.settings";
import { Settings } from "../app.settings.model";
import { rotate } from "../theme/utils/app-animation";
import { MenuService } from "../theme/components/menu/menu.service";
import { Subscription, Observable } from "rxjs";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA, MatAutocompleteTrigger, MatDialog } from "@angular/material";
import { startWith, map } from "rxjs/operators";
import { NavigateService } from "../shared/services/navigate.service";
import { NotifyScrollService } from "../shared/services/notifyscroll.service";
import { LoginComponent } from "../shared/login/login.component";
import { optionalGetterForProp } from "@swimlane/ngx-datatable/release/utils";
// import { AuthService } from "../guards/auth.service";
import { KibsonsWEBUserModel } from "../guards/user.model";
import { UserService } from "../guards/user.service";
// import { ProductsComponent } from './products/products.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
  animations: [rotate],
  providers: [MenuService],
})
export class PagesComponent implements OnInit, AfterViewInit {
  private PageScrolled: EventEmitter<boolean> = new EventEmitter();
  @ViewChild("sidenav", { static: true }) sidenav: any;
  @ViewChild("backToTop", { static: true }) backToTop: any;
  // @ViewChild("myUser",{static: true}) myUser : KibsonsWEBUserModel;
  @ViewChild("searchKibsons", { read: MatAutocompleteTrigger, static: true })
  autoTrigger: MatAutocompleteTrigger;
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
  public optionsPsConfig: PerfectScrollbarConfigInterface = {};
  public settings: Settings;
  public showSidenav = false;
  public CartTotalAmount = 0;
  public TotalDiscAmount = 0;
  public CartTotalCount = 0;
  public TotalFavCount = 0;
 public myUser : KibsonsWEBUserModel;
  // public showInfoContent = false;
  public toggleSearchBar = false;
  public mnuMyAccount =false;
  public myUserName: string;
  public myImage: string;
  private defaultMenu: string; // declared for return default menu when window resized
  public menus = ["vertical", "horizontal"];
  public menuOption: string;
  public menuTypes = ["default", "compact", "mini"];
  public menuTypeOption: string;
  subscription: Subscription;
  authentication: boolean;
  form: FormGroup;
  // options: string[] = ['Abu Dhabi', 'Abu Dhabi - Al Ruwais', 'Ajman', 'Al Ain', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Um Al Quaian'];
  options: string[] = [""];
  filteredOptions: Observable<string[]>;

  constructor(
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router,
    private menuService: MenuService,
    private navigateservice: NavigateService,
    private notifyScrollService: NotifyScrollService,
    public loginDialog : MatDialog,
    public userService: UserService
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      SearchFieldName: [null, null],
    });

    // this.backToTop.nativeElement.style.display = 'none'; 
   
    this.router.events.subscribe(event => {
      // if (event instanceof NavigationEnd) {
      //   this.scrollToTop();
      // } 
      if(window.innerWidth <= 960){
        this.sidenav.close(); 
      }                
    });

    if(this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems()); 

  }

  ngOnInit() {
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
    
   this.loadMyAccount();
    this.loadCartValues();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    }, 800);
    this.backToTop.nativeElement.style.display = "none";
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
      if (window.innerWidth <= 960) {
        this.sidenav.close();
      }
    });
    if (this.settings.menu === "vertical") {
      this.menuService.expandActiveSubMenu(
        this.menuService.getVerticalMenuItems()
      );
    }

    this.autoTrigger.panelClosingActions.subscribe((x) => {
      if (this.autoTrigger.activeOption) {
        // console.log(this.autoTrigger.activeOption.value);
        // this.myControl.setValue(this.autoTrigger.activeOption.value)
        this.form.controls["SearchFieldName"].setValue(
          this.autoTrigger.activeOption.value
        );
      }
    });
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    if (this.menuOption === "horizontal") {
      this.settings.fixedSidenav = false;
    }
    this.navigateservice.navigateTo("/");
    // this.router.navigate(['/']);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme) {
    this.settings.theme = theme;
  }

  // public closeInfoContent(showInfoContent) {
  //   this.showInfoContent = !showInfoContent;
  // }

  @HostListener("window:resize")
  public onWindowResize(): void {
    if (window.innerWidth <= 960) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = "vertical";
    } else {
      this.defaultMenu === "horizontal"
        ? (this.settings.menu = "horizontal")
        : (this.settings.menu = "vertical");
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public onPsScrollY(event) {
    event.target.scrollTop > 300
      ? (this.backToTop.nativeElement.style.display = "flex")
      : (this.backToTop.nativeElement.style.display = "none");
      this.PageScrolled.emit(true);
      this.notifyScrollService.notifyOther({option: 'call_child', value: event.target.scrollTop });
  }

  public scrollToTop() {
    // console.log(this.pss);
    this.pss.forEach((ps) => {
      if (ps.elementRef.nativeElement.id === "main") {
        ps.scrollToTop(0, 250);
      }
    });
  }

  public closeSubMenus() {
    if (this.settings.menu === "vertical") {
      this.menuService.closeAllSubMenus();
    }
  }

  openmyshopcart() {
    this.navigateservice.navigateTo("/myshopcart");
  }

  openmywishlist() {
    this.navigateservice.navigateTo("/mywishlist");
  }
  openLogin() {
    let dialogRef = this.loginDialog.open(LoginComponent, {
      data: {}
    });
   
    dialogRef.afterClosed().subscribe(result => {   
      
      // this.mnuMyAccount=true;
      if(result.data.Status){
      this.loadMyAccount();
      }
    // this.form.controls['latitude'].setValue(result.data.Latitude);
    // this.form.controls['longitude'].setValue(result.data.Longitude);
    // this.form.controls['address'].setValue(result.data.Address);
    });

    //this.navigateservice.navigateTo("/login");
  }

  openRegister() {
    this.navigateservice.navigateTo("/register");
  }

  autocompletereset() {
    this.filteredOptions = this.form.controls.SearchFieldName.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  loadCartValues() {
    // this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
    let myCartValue = JSON.parse(localStorage.getItem("myCartValue"));
    if (myCartValue === null) {
      var data = {
        fav: 0,
        cnt: 0,
        amt: 0,
        dsc:0,
      };
      const obj = JSON.stringify(data);
      localStorage.setItem("myCartValue", obj);

      this.CartTotalAmount = data.amt;
      this.CartTotalCount = data.cnt;
      this.TotalFavCount = data.fav;
      this.TotalDiscAmount = data.dsc;
    } else {
      this.CartTotalAmount = myCartValue.amt;
      this.CartTotalCount = myCartValue.cnt;
      this.TotalFavCount = myCartValue.fav;
      this.TotalDiscAmount = myCartValue.dsc;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value == null ? value : value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  loadMyAccount(){
    if(this.userService.isSignedIn()){
      this.myUser = this.userService.getCurrentUser();
      // console.log(this.myUser);
      this.myUserName= this.myUser.firstname;
      this.myImage = (this.myUser.image!="NO_IMAGE") ? this.myUser.image:"assets/img/KB_icons_headerfooter_0016_W_account.png";
      // this.myImage ="https://media-exp1.licdn.com/dms/image/C5103AQGEqeHQzSklNg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=vQ9HJt3NVc8MjSBomKSehV6dc30D-geXbXid3jYQWFk";
  
      // console.log(this.myImage);
      this.mnuMyAccount=true;
    }
    else{
      this.myUser = null;
      this.myUserName= null;
      this.myImage = null;
      // this.myImage ="https://media-exp1.licdn.com/dms/image/C5103AQGEqeHQzSklNg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=vQ9HJt3NVc8MjSBomKSehV6dc30D-geXbXid3jYQWFk";
  
      // console.log(this.myImage);
      this.mnuMyAccount=false;
    }
  }

  logoutmyAccount(){


    // localStorage.removeItem("jwt");
    // localStorage.removeItem("FaceBookSocialUser");
    // localStorage.removeItem("GoogleSocialUser");    
    
    localStorage.clear();
    this.loadMyAccount();    
    this.loadCartValues();





  }

  onActivate(componentReference) {
    console.log(componentReference)
    // componentReference.anyFunction();
    // userLogin
    componentReference.userLogin.subscribe((data) => {
      console.log(data);
   })
 }


  // ChangeLang(event){
  //   console.log(event);
  //   if (event ==='ar'){
  //     this.appSettings.settings.rtl=true;
  //     console.log(RouterState);
  //   }else if (event ==='en'){
  //     this.appSettings.settings.rtl=false;
  //   }
  // }
}

