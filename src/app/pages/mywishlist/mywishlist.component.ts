import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.scss']
})
export class MyWishListComponent implements OnInit {
  myWishListArray: any = [];
  constructor() { }

  ngOnInit() {
    this.loadMyWishList()
  }

  loadMyWishList(){
    this.myWishListArray=JSON.parse(localStorage.getItem("myKIBFavCart"));
   
    //   this.CartTotalCount=myKIBShopCart.length;
    //   this.TotalFavCount=myKIBFavCart.length;
    //   for(let result of myKIBShopCart){
  
    //     this.CartTotalAmount+=  result.StockCartQty * result.DisplayRate;
       
    //  }
  }





}
