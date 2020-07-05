import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  TemplateRef,
  NgZone,
  ElementRef,
  HostListener,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StockMaster } from "src/app/shared/model/stockmaster";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { RepositoryService } from "src/app/shared/services/repository.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from "@angular/cdk/drag-drop";
import { ShoppingCart } from "src/app/shared/model/shoppingcart";
import { PagesComponent } from "../pages.component";
import { NotifyScrollService } from "src/app/shared/services/notifyscroll.service";
import { Subscription } from "rxjs";
import { Settings } from "src/app/app.settings.model";
import { AppSettings } from "src/app/app.settings";

@Component({
  selector: "app-shopping",
  templateUrl: "./shopping.component.html",
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ["./shopping.component.scss"],
})
export class ShoppingComponent implements OnInit, OnDestroy,AfterViewInit {
  apiURL: string = "/api/Item/getItems";
  searchType: string = "";
  searchItem: string = "";
  _height: number = 600;
  _loadMore: number = 15;

  public shoppingcart: ShoppingCart;  
  public settings: Settings
  // public CartTotalAmount: number =0;
  // public CartTotalCount : number =0;
  // public TotalFavCount : number =0;

  tmpProductsArry: any = [];
  ProductsArry: any = [];

  CategoryArry: any = [];
  FeaturedArry: any = [];

  myVariableColor: any;
  subscription: Subscription;
  slideConfigFeatured = {
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    responsive: [{ breakpoint: 500, settings: { slidesToShow: 4 } }],
  };
  // @Input()
  // @ViewChild('innerTemplate',{static: true})
  // public innerTemplate: TemplateRef<any>;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    public http: HttpClient,
    public repService: RepositoryService,
    // public bugService: BugService,
    private activatedRoute: ActivatedRoute,
    public pagesComponent: PagesComponent,
    private element: ElementRef,
    private notifyScrollService: NotifyScrollService,
    public appSettings: AppSettings
  ) {this.settings = this.appSettings.settings;}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    }, 800);
  }

  ngOnInit() {
    this.subscription = this.notifyScrollService.notifyObservable$.subscribe(
      (res) => {
        if (res.hasOwnProperty("option") && res.option === "call_child") {
          // console.log(res.value);
          // perform your other action from here
          this.pageScrolled(res.value);
        }
      }
    );

    this.loadProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  pageScrolled(varpageYOffset) {
    // console.log("YOffset "+varpageYOffset);
    if (varpageYOffset > this._height) {
      // console.log('loading more..')
      this._height = this._height + 1300;

      // console.log("Height " +this._height);
      // console.log("YOffset "+varpageYOffset);
      this.ProductsArry = [];

      //this.ProductsArry.push(this.tmpProductsArry.slice(0, 50))
      this._loadMore = this._loadMore + 15;
      this.ngZone.run(
        () =>
          (this.ProductsArry = this.tmpProductsArry.slice(0, this._loadMore))
      );

      // console.log("PrdAry Len "+this.ProductsArry.length );
      // console.log("TMPPrdAry Len "+this.tmpProductsArry.length );
    }
  }

  loadProducts() {
    this.CategoryArry = JSON.parse(localStorage.getItem("setTmpCategorydArry"));
    this.FeaturedArry = JSON.parse(localStorage.getItem("setTmpFeaturedArry"));

    this.activatedRoute.params.subscribe((params) => {
      this.searchType = params["type"];
      this.searchItem = params["item"];
    });

    let params = new HttpParams();

    params = params.append("_userDocType", "CCSUR");
    params = params.append("_userDocNo", "1027");
    params = params.append("_category", "");
    params = params.append("_searchType", "");
    params = params.append("_SearchPram", "");
    params = params.append("_language", "en");

    let formData = new FormData();
    formData.append("_userDocType", "CCSUR");
    formData.append("_userDocNo", "1027");
    formData.append("_category", "fruits");
    formData.append("_searchType", "");
    formData.append("_SearchPram", "");

    formData.append("_language", "en");
    // formData.append("_language","ar");

    this.repService.callingSecureApi(formData, this.apiURL).subscribe((res) => {
      var data = res.Data;
      // let table0 = data["productData"];

      let myKIBShopCart = JSON.parse(localStorage.getItem("myKIBShopCart"));
      let myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));

      for (let result of data["productData"]) {
        if (myKIBShopCart != null) {
          const productExistInCart = myKIBShopCart.find((a) => a.StockCode === result.StockCode);
          if (productExistInCart) { result.StockCartQty += myKIBShopCart.find((a) => a.StockCode === result.StockCode).StockCartQty;}
        }

        if (myKIBFavCart != null) {
          const productExistInCart = myKIBFavCart.find((a) => a.StockCode === result.StockCode);
          if (productExistInCart) {result.StockFavourites = "YES";}
        }

        this.tmpProductsArry.push(Object.assign(new StockMaster(), result));
        this.ProductsArry = this.tmpProductsArry.slice(0, this._loadMore);
      }
    });
  }
}
