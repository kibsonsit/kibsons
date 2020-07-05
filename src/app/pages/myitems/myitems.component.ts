import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/model/shoppingcart';
import { MatSnackBar } from '@angular/material';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.scss']
})
export class MyitemsComponent implements OnInit {
  @Input() myCartList: ShoppingCart;

  myKIBShopCart = [];
    constructor(public pagesComponent: PagesComponent,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  AddQty(event) {
    this.myCartList.StockCartQty++;
    this.addtocart(this.myCartList);
    this.snackBar.open("1 " + this.myCartList.DisplayUnits+" of " + this.myCartList.StockDesc + " Added", "Kibsons Shopping Cart", {duration: 3000,});
  }

  SubQty(event) {
    if(this.myCartList.StockCartQty > 0){
      this.myCartList.StockCartQty--
        this.subfromcart(this.myCartList);
        this.snackBar.open("1 " + this.myCartList.DisplayUnits+" of " + this.myCartList.StockDesc + " Removed", "Kibsons Shopping Cart", {duration: 3000,});
    }  
  }

  addtocart(_myCartList: ShoppingCart) {
  

    this.myKIBShopCart = JSON.parse(localStorage.getItem("myKIBShopCart"));

    const productExistInCart = this.myKIBShopCart.find(
      (a) => a.StockCode === _myCartList.StockCode
    );
    if (productExistInCart) {
      this.myKIBShopCart.find((a) => a.StockCode === _myCartList.StockCode)
        .StockCartQty++;

        let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
        myCartValue.amt =myCartValue.amt+(_myCartList.DisplayRate);
        myCartValue.dsc =myCartValue.dsc+(_myCartList.DiscountedPrice===0?_myCartList.DisplayRate:_myCartList.DiscountedPrice);
        localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
        this.pagesComponent.CartTotalAmount= myCartValue.amt;
        this.pagesComponent.TotalDiscAmount= myCartValue.dsc;
    }
    localStorage.setItem("myKIBShopCart", JSON.stringify(this.myKIBShopCart));
  }

  subfromcart(_myCartList: ShoppingCart) {
      this.myKIBShopCart = JSON.parse(localStorage.getItem("myKIBShopCart"));

    const productExistInCart = this.myKIBShopCart.find(
      (a) => a.StockCode === _myCartList.StockCode
    );
    if (productExistInCart) {
      if (this.myKIBShopCart.find((a) => a.StockCode === _myCartList.StockCode).StockCartQty > 1) {
        this.myKIBShopCart.find((a) => a.StockCode === _myCartList.StockCode).StockCartQty--;
        let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
        myCartValue.amt =myCartValue.amt-(_myCartList.DisplayRate);
        myCartValue.dsc = myCartValue.dsc-(_myCartList.DiscountedPrice===0?_myCartList.DisplayRate:_myCartList.DiscountedPrice);
        localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
        this.pagesComponent.CartTotalAmount= myCartValue.amt;
        this.pagesComponent.TotalDiscAmount=myCartValue.dsc;
        
      } else  {
        this.myKIBShopCart.find((a) => a.StockCode === _myCartList.StockCode).StockCartQty--;
        let myCartValue=JSON.parse(localStorage.getItem("myCartValue"));
        myCartValue.amt =myCartValue.amt-(_myCartList.DisplayRate);
        myCartValue.dsc =myCartValue.dsc-(_myCartList.DiscountedPrice===0?_myCartList.DisplayRate:_myCartList.DiscountedPrice);
        myCartValue.cnt--;
        localStorage.setItem("myCartValue",JSON.stringify(myCartValue));
        this.pagesComponent.CartTotalAmount= myCartValue.amt;
        this.pagesComponent.CartTotalCount=myCartValue.cnt;
        this.pagesComponent.TotalDiscAmount=myCartValue.dsc;
        this.myKIBShopCart.splice(this.myKIBShopCart.indexOf(this.myKIBShopCart.find((a) => a.StockCode === _myCartList.StockCode)),1);
      }
    }
    localStorage.setItem("myKIBShopCart", JSON.stringify(this.myKIBShopCart));
  }
}
