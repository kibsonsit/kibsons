import { Component, OnInit, Input, Output, HostListener, SimpleChanges, OnChanges } from "@angular/core";
import { StockMaster } from "../../shared/model/stockmaster";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { ShoppingCart } from "src/app/shared/model/shoppingcart";
import { getAttrsForDirectiveMatching } from "@angular/compiler/src/render3/view/util";
import { asapScheduler } from "rxjs";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { PagesComponent } from "../pages.component";
import { SnackBarComponent } from "src/app/shared/snack-bar/snack-bar.component";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  @Input()
  @Input() stockMaster: StockMaster;
  public shoppingCart: ShoppingCart[];
  myKIBShopCart = [];
  myKIBFavCart = [];
  tmpProductsArry: any = [];
  myVariableColor:any;
  public qty: number = 0;

  constructor(public pagesComponent: PagesComponent, private snackBar: MatSnackBar) {}

  ngOnInit() {
    if(this.stockMaster.StockFavourites ==="YES"){
    this.myVariableColor="red";
    }else
    {
    this.myVariableColor="white";}
 
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("AM IN"); 
  // }

  AddQty(event) {
    // 
   this.stockMaster.StockCartQty++;
    this.addtocart(this.stockMaster);
    this.snackBar.open("1 " + this.stockMaster.DisplayUnits+" of " + this.stockMaster.StockDesc + " Added", "Kibsons Shopping Cart", {duration: 3000,});
    //localStorage.setItem("ShottpingCart",JSON.stringify(this.stockMaster));
  }

  SubQty(event) {
    if(this.stockMaster.StockCartQty > 0){
      // 
      this.stockMaster.StockCartQty--
        this.subfromcart(this.stockMaster);
        this.snackBar.open("1 " + this.stockMaster.DisplayUnits+" of " + this.stockMaster.StockDesc + " Removed", "Kibsons Shopping Cart", {duration: 3000,});
    }  
  }


  addfav(event) {
    var data = {
      'SpDocSrNo':this.stockMaster.SpDocSrNo,
      'StockCode':this.stockMaster.StockCode,
      'StockDesc':this.stockMaster.StockDesc
    }
    // const obj = JSON.stringify(data);
    this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
    if (this.myKIBFavCart === null) {
      localStorage.setItem(
        "myKIBFavCart",
        JSON.stringify(Array.of(this.stockMaster))
      );
      this.myVariableColor="red";
      let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
      myCartValue.fav++;
      localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
      this.pagesComponent.TotalFavCount = myCartValue.fav;
      this.snackBar.open( this.stockMaster.StockDesc + " Added to Your Favorites", "Kibsons Favorite Items", {duration: 3000,});
      return;
    }

    const productExistInCart = this.myKIBFavCart.find(
      (a) => a.StockCode === this.stockMaster.StockCode
    );
    if (!productExistInCart) {
      this.myKIBFavCart.push(Object.assign(this.stockMaster));   
      this.myVariableColor="red";  
      let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
      myCartValue.fav++;
      localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
      this.pagesComponent.TotalFavCount = myCartValue.fav;
      this.snackBar.open( this.stockMaster.StockDesc + " Added to Your Favorites", "Kibsons Favorite Items", {duration: 3000,});
    } 
    else {
      this.myKIBFavCart.splice(this.myKIBFavCart.indexOf(this.myKIBFavCart.find((a) => a.StockCode === this.stockMaster.StockCode)),1);
      this.myVariableColor="white";
      let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
      myCartValue.fav--;
      localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
      this.pagesComponent.TotalFavCount = myCartValue.fav;
      this.snackBar.open( this.stockMaster.StockDesc + " Removed from Your Favorites", "Kibsons Favorite Items", {duration: 3000,});
    }
    localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));

  
  }

  addtocart(_stockMaster: StockMaster) {
    const _shopcart = new ShoppingCart();

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
      localStorage.setItem("myKIBShopCart",JSON.stringify(Array.of(_shopcart)));
      let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
      myCartValue.amt =myCartValue.amt+(_stockMaster.DisplayRate);
      myCartValue.cnt++;
      myCartValue.dsc=myCartValue.dsc+(_stockMaster.DiscountedPrice===0?_stockMaster.DisplayRate:_stockMaster.DiscountedPrice);
      localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
      this.pagesComponent.CartTotalAmount=myCartValue.amt;
      this.pagesComponent.CartTotalCount=myCartValue.cnt;
      this.pagesComponent.TotalDiscAmount=myCartValue.dsc;

      this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
      if (this.myKIBFavCart != null) {
        if(this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode))  this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty++;
      localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));}
      // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount+(_stockMaster.DisplayRate);
      // this.pagesComponent.CartTotalCount++;
      return;
    }

    const productExistInCart = this.myKIBShopCart.find(
      (a) => a.StockCode === _stockMaster.StockCode
    );
    if (!productExistInCart) {
      this.myKIBShopCart.push(Object.assign(new ShoppingCart(), _shopcart));
      let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
      myCartValue.amt=myCartValue.amt+(_stockMaster.DisplayRate);
      myCartValue.cnt++;
      myCartValue.dsc=myCartValue.dsc+(_stockMaster.DiscountedPrice===0?_stockMaster.DisplayRate:_stockMaster.DiscountedPrice);
      localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
      this.pagesComponent.CartTotalAmount=myCartValue.amt;
      this.pagesComponent.CartTotalCount=myCartValue.cnt;
      this.pagesComponent.TotalDiscAmount=myCartValue.dsc;

      this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
      if (this.myKIBFavCart != null) {
       if(this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode)) this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty++;
      localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));}
      

      // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount+(_stockMaster.DisplayRate);
      // this.pagesComponent.CartTotalCount++;
    } else {
      this.myKIBShopCart.find((a) => a.StockCode === _stockMaster.StockCode)
        .StockCartQty++;

        let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
        myCartValue.amt =myCartValue.amt+(_stockMaster.DisplayRate);
        myCartValue.dsc=myCartValue.dsc+(_stockMaster.DiscountedPrice===0?_stockMaster.DisplayRate:_stockMaster.DiscountedPrice);
        localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
        this.pagesComponent.CartTotalAmount=myCartValue.amt;
        this.pagesComponent.TotalDiscAmount=myCartValue.dsc;
      

        this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
        if (this.myKIBFavCart != null) {
          if(this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode))  this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty++;
        localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));}

        // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount+(_stockMaster.DisplayRate);
    }
    localStorage.setItem("myKIBShopCart", JSON.stringify(this.myKIBShopCart));
  }

  subfromcart(_stockMaster: StockMaster) {
    const _shopcart = new ShoppingCart();

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

    const productExistInCart = this.myKIBShopCart.find(
      (a) => a.StockCode === _stockMaster.StockCode
    );
    if (productExistInCart) {
      if (this.myKIBShopCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty > 1) {
        this.myKIBShopCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty--;
        let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
        myCartValue.amt =myCartValue.amt-(_stockMaster.DisplayRate);
      myCartValue.dsc=myCartValue.dsc-(_stockMaster.DiscountedPrice===0?_stockMaster.DisplayRate:_stockMaster.DiscountedPrice);
        localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
        this.pagesComponent.CartTotalAmount= myCartValue.amt;
        this.pagesComponent.TotalDiscAmount=myCartValue.dsc;

        this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
        if (this.myKIBFavCart != null) {
          if(this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode)) this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty--;
        localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));}
          // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount-(_stockMaster.DisplayRate);
      } else  {
        this.myKIBShopCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty--;
        let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
        myCartValue.amt =myCartValue.amt-(_stockMaster.DisplayRate);
        myCartValue.cnt--;
        myCartValue.dsc=myCartValue.dsc-(_stockMaster.DiscountedPrice===0?_stockMaster.DisplayRate:_stockMaster.DiscountedPrice);
        localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
        this.pagesComponent.CartTotalAmount= myCartValue.amt;
        this.pagesComponent.CartTotalCount=myCartValue.cnt;
        this.pagesComponent.TotalDiscAmount=myCartValue.dsc;

        this.myKIBFavCart = JSON.parse(localStorage.getItem("myKIBFavCart"));
        if (this.myKIBFavCart != null) {
          if(this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode))  this.myKIBFavCart.find((a) => a.StockCode === _stockMaster.StockCode).StockCartQty--;
        localStorage.setItem("myKIBFavCart", JSON.stringify(this.myKIBFavCart));}
        // this.pagesComponent.CartTotalAmount= this.pagesComponent.CartTotalAmount-(_stockMaster.DisplayRate);
        // this.pagesComponent.CartTotalCount--;

        this.myKIBShopCart.splice(this.myKIBShopCart.indexOf(this.myKIBShopCart.find((a) => a.StockCode === _stockMaster.StockCode)),1);
      }
    }
      localStorage.setItem("myKIBShopCart", JSON.stringify(this.myKIBShopCart));
  }

  
}
