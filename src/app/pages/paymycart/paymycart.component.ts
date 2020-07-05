import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-paymycart',
  templateUrl: './paymycart.component.html',
  styleUrls: ['./paymycart.component.scss']
})
export class PayMyCartComponent implements OnInit {

  public CartAmount;
  public OrderNo;
  constructor(private navigateservice: NavigateService, ) { }

  ngOnInit() {
    this.loadMyPay();
  }
  openOnlinePayment(){
    
  }
  openShoppingCart(){
    this.navigateservice.navigateTo('myshopcart');
  }
  openConfirmOrder(){
    this.navigateservice.navigateTo('confirmorder');
  }
  loadMyPay(){
    let myOrderExtra = JSON.parse(localStorage.getItem("myOrderExtra"));
this.CartAmount=myOrderExtra.OrderAmount;
this.OrderNo=myOrderExtra.OrderNo;
  }
}
