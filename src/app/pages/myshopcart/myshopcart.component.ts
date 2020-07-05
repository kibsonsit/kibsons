import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/model/shoppingcart';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AddressDetails } from '../addressdetails/addressdetails.component';
import { MatTableDataSource } from '@angular/material';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';
import { KibsonsWEBUserModel } from 'src/app/guards/user.model';
import { UserService } from 'src/app/guards/user.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { NavigateService } from 'src/app/shared/services/navigate.service';

export interface DeliverDate {
  value: string;
  viewValue: string;
}
export interface DeliverTime {
  value: string;
  viewValue: string;
}
export interface CreditNote {
  value: string;
  viewValue: string;
}
 
@Component({
  selector: 'app-myshopcart',
  templateUrl: './myshopcart.component.html',
  styleUrls: ['./myshopcart.component.scss']
})
export class MyShopCartComponent implements OnInit {

  public myShopCartArray :  ShoppingCart;
  public addressDetails: AddressDetails[];
  public user: KibsonsWEBUserModel;

  form: FormGroup;
  // vardate : Date;
  vardate = Date.now();

deliverdates: DeliverDate[] = [
  {value: "29 Jun 2020",
    viewValue: "29 Jun 2020"},
 { value: "30 Jun 2020",
  viewValue:"30 Jun 2020"},
 { value:"01 Jul 2020",
  viewValue:"01 Jul 2020"},
  { value:"02 Jul 2020",
  viewValue:"02 Jul 2020"},
  { value:"03 Jul 2020",
  viewValue:"03 Jul 2020"}
];

delivertimes: DeliverTime[] = [
   {value: "8 AM - 1 PM" ,
   viewValue: "8 AM - 1 PM"},
 { value: "2 PM - 5 PM",
 viewValue:"2 PM - 5 PM"},
  { value: "5 PM - 9 PM",
  viewValue:"5 PM - 9 PM"}     
];
  
creditnotes: CreditNote[] = [
  { value: "AED50 - CN001215643" ,
    viewValue: "AED50 - CN001215643"},
  { value: "AED150 - CN001215643",
    viewValue:"AED150 - CN001215643"},
 {  value: "AED250 - CN001215643",
    viewValue:"AED250 - CN001215643"}     
];
  constructor( private http: HttpClient,  private userService: UserService, 
    public fb: FormBuilder,    
    private navigateservice: NavigateService,
    private envUrl: EnvironmentUrlService, ) {
      this.form = this.fb.group({
        addressTitle:[null, Validators.compose([Validators.required])],
        deliverDate:[null],
        deliverTime:[null],
        discountCode:[null],
        creditNote:[null],
        loyaltyPoints:[null],
        phoneNumber:[null],
        donationAmount:[null]
        
      });

      // alert(this.vardate + 1 );
    //  alert(formatDate(this.vardate.setDate( this.vardate.getDate() + 3 ), 'dd MMM yyyy', 'en-US'));
     }



  ngOnInit() {
    this.loadMyShopCart();
    this.user = this.userService.getCurrentUser()
   // console.log(this.vardate);
    this.loadAddressDetails();
  }

  loadMyShopCart(){
     this.myShopCartArray=JSON.parse(localStorage.getItem("myKIBShopCart"));
  }

  loadAddressDetails(){


    let params = new HttpParams().set("userMasterID",this.user.usermasterid); 
    this.http.get(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/loadaddress',{ params: params}).subscribe(response => { 
      this.addressDetails = response as AddressDetails[];
      // this.dsaddressdetails = new MatTableDataSource(response as AddressDetails[]);
      console.log(response as AddressDetails[]);
    }, err => {
      console.log(err.error);
    });
  }

  onChangeaddress(event){
  console.log(event);
  }
  openConfirmOrder(form: NgForm){

 this.prepareOrderDetails(form);

    this.navigateservice.navigateTo('confirmorder');
  }

  prepareOrderDetails(form: NgForm){

    let myCartValue = JSON.parse(localStorage.getItem("myCartValue"));

    var data = {
      DeliveryTitle:this.form.value.addressTitle,
      DeliveryDate:this.form.value.deliverDate,
      DeliveryTime:this.form.value.deliverTime,
      DiscountCode:this.form.value.discountCode,
      VoucherDetail:this.form.value.creditNote,
      LoyaltyPoints:this.form.value.loyaltyPoints,
      DonationAmount:this.form.value.donationAmount,
      Grossamount:myCartValue.dsc,
      MyFirstOrder:0,
      Voucher:0,
      Promotion: (myCartValue.dsc - myCartValue.amt),
      NetAmount: myCartValue.amt,
  };

  var obj = JSON.stringify(data);
  localStorage.setItem("myOrderAmount", obj);

  }
}
