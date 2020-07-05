import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  public GrossAmt = 0;
  public MyFirstOrderAmt = 0;
  public VoucherAmt = 0;
  public PromotionAmt = 0;
  public NetAmt = 0 ;
  public AvailbleBalanceAmt = 0;
  public DeliveryTitle;
  public DeliveryDate ;
  public DeliveryTime;
  form: FormGroup;
 
  constructor(private navigateservice: NavigateService, public fb: FormBuilder, ) {
    this.form = this.fb.group({
      OutofStock: [null],
      Packing:[null],
      Invoice:[null],
      SpecialMessage:[null],  
      PayNow:[null]    
    });
   }

  ngOnInit() {
    this.loadCartTotal();
  }

  openShoppingCart(){
    this.navigateservice.navigateTo('myshopcart');
  }
  openConfirmOrder(form: NgForm){ 
  var data = 
  {
    OrderNo:"RSO-1518464",
    OutofStock: this.form.value.OutofStock,
    Packing: this.form.value.Packing,
    Invoice: this.form.value.Invoice,
    SpecialMessage: this.form.value.SpecialMessage,
    OrderAmount:this.NetAmt
  };

var obj = JSON.stringify(data);
localStorage.setItem("myOrderExtra", obj);

    this.navigateservice.navigateTo('paymycart');
  }

  loadCartTotal(){
    let myOrderAmount = JSON.parse(localStorage.getItem("myOrderAmount"));
    this.GrossAmt = myOrderAmount.Grossamount;
    this.MyFirstOrderAmt= myOrderAmount.MyFirstOrder;
    this.VoucherAmt= myOrderAmount.Voucher;
    this.PromotionAmt= myOrderAmount.Promotion;
    this.NetAmt = myOrderAmount.NetAmount;  
    this.DeliveryTitle= myOrderAmount.DeliveryTitle;
    this.DeliveryDate =myOrderAmount.DeliveryDate;
    this.DeliveryTime = myOrderAmount.DeliveryTime;
  }
}
