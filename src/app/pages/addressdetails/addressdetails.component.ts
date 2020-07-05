import { Component, OnInit, Inject, NgZone, ViewChild, ElementRef  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatTableDataSource, MatAutocompleteTrigger, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MapsAPILoader,MouseEvent } from '@agm/core';
import { Settings } from "../../app.settings.model";
import { AppSettings } from 'src/app/app.settings';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { KibsonsWEBUserModel } from 'src/app/guards/user.model';
import { UserService } from 'src/app/guards/user.service';
// import {AddressDetails} from 'src/app/shared/interfaces/addressdetails.model';

export interface AddressDetails {
  slno: number;
  addressTitle: string;
  county: string;
  area: string;
  address1: string;
  address2: string;
  landmark: string;
  latitude:string;
  longitude:string;
  autonum:number,
  UserMasterID: string;

}

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
 

@Component({
  selector: 'app-addressdetails',
  templateUrl: './addressdetails.component.html',
  styleUrls: ['./addressdetails.component.scss']
})
export class AddressdetailsComponent implements OnInit {
  @ViewChild( 'autocounty', {read:MatAutocompleteTrigger,static:true})  autoTrigger: MatAutocompleteTrigger;
  @ViewChild( 'autoarea', {read:MatAutocompleteTrigger,static:true})  autoTrigger1: MatAutocompleteTrigger;

  addressdetailcolumns: string[] = ["slno","addresstitle","county","area","address","landmark"];
  dsaddressdetails = new MatTableDataSource();
  public addresstitle: string;
  public county: string;
  public area: string;
  public address1: string;
  public address2: string;
  public landmark: string;
  public latitude: string;
  public longitude: string;
  public address: string;
  public autoid : number;
  public usermasterid: string;
  public addressDetailsres: any;

  public user: KibsonsWEBUserModel;

  public submitted: boolean = false;
  
  UpdateDisabled: boolean=false;
  AddDisabled: boolean=true;

  form: FormGroup;

  // myControl = new FormControl();
  // myControl1 = new FormControl();
  options: string[] = ['Abu Dhabi', 'Abu Dhabi - Al Ruwais', 'Ajman', 'Al Ain', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Um Al Quaian'];
  options1: string[] = ['1 Abu Dhabi', '2 Abu Dhabi - Al Ruwais', '3 Ajman', '4 Al Ain', '5 Dubai', '6 Fujairah', '7 Ras Al Khaimah', '8 Sharjah', '9 Um Al Quaian'];

  
  

  filteredOptions: Observable<string[]>;
  filteredOptions1: Observable<string[]>;
  public settings: Settings;

  constructor(
    public googlemapdialog : MatDialog,
    public appSettings: AppSettings,
    public fb: FormBuilder,
    private http: HttpClient, 
    private envUrl: EnvironmentUrlService, 
    public snackBar: MatSnackBar, private userService: UserService,
    private navigateservice: NavigateService ) 
    {   
      this.settings = this.appSettings.settings;
      this.form = this.fb.group({
        addresstitle: [null, Validators.compose([Validators.required])],
        county: [null, Validators.compose([Validators.required])],
        area: [null, Validators.compose([Validators.required])],
        address1: [null, Validators.compose([Validators.required])],
        address2: [null, Validators.compose([Validators.required])],
        landmark: [null, Validators.compose([Validators.required])],
        latitude: [null, Validators.compose([Validators.required])],
        longitude: [null, Validators.compose([Validators.required])]        
      });
    
    }

  ngOnInit() {
    // this.myControl.valueChanges
    this.user = this.userService.getCurrentUser()
    this.autocompletereset();
   
  }
  ngAfterViewInit()
  {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    }, 800);
   this.loadAddressDetails();

     
    this.autoTrigger.panelClosingActions.subscribe( x =>{
      if (this.autoTrigger.activeOption)
      {
        console.log(this.autoTrigger.activeOption.value)
        // this.myControl.setValue(this.autoTrigger.activeOption.value)
        this.form.controls['county'].setValue(this.autoTrigger.activeOption.value);
      }
    } );

    this.autoTrigger1.panelClosingActions.subscribe( x =>{
      if (this.autoTrigger1.activeOption)
      {
        console.log(this.autoTrigger1.activeOption.value)
        // this.myControl1.setValue(this.autoTrigger1.activeOption.value)
        this.form.controls['area'].setValue(this.autoTrigger1.activeOption.value);
      }
    } )
  }
autocompletereset(){
  this.filteredOptions =this.form.controls.county.valueChanges     
  .pipe(
    startWith(''),
    map(value => this._filter(value))
  );
  this.filteredOptions1 = this.form.controls.area.valueChanges
  .pipe(
    startWith(''),
    map(value1 => this._filter1(value1))
  );}

  private _filter(value: string): string[] {
    const filterValue = (value == null) ?value: value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue1 = (value == null) ?value: value.toLowerCase();

    return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));
  }

  openGoogleMapDialog(): void {
    let dialogRef = this.googlemapdialog.open(DialogOpenMap, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {   
    this.form.controls['latitude'].setValue(result.data.Latitude);
    this.form.controls['longitude'].setValue(result.data.Longitude);
    // this.form.controls['address'].setValue(result.data.Address);
    this.address=result.data.Address;
    });
  }


  getselected(row){
    this.form.controls['addresstitle'].setValue(row.addressTitle);
    this.form.controls['county'].setValue(row.county);
    this.form.controls['area'].setValue(row.area);
    this.form.controls['address1'].setValue(row.address1);
    this.form.controls['address2'].setValue(row.address2);
    this.form.controls['landmark'].setValue(row.landMark);
    this.form.controls['latitude'].setValue(row.latitude);
    this.form.controls['longitude'].setValue(row.longitude);
    this.autoid=row.autonum;
    this.usermasterid = row.userMasterId;
    // this.UpdateDisabled=true;
  }

resetForm(){
  this.form.reset();
  this.autocompletereset();
  this.UpdateDisabled=false; 
  this.AddDisabled=true;
}

  addaddressdetails(form: NgForm){
        var data = { 

          'addresstitle': form.value.addresstitle,
          'county': form.value.county,
          'area': form.value.area,
          'address1': form.value.address1,
          'address2': form.value.address2,
          'landmark': form.value.landmark,
          'latitude': form.value.latitude,
          'longitude': form.value.longitude,
          'autonum':this.autoid,
          'usermasterid':this.user.usermasterid
   };
    const obj = JSON.stringify(data);
// addressdatamodel: AddressDetails();


    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/addaddress', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.snackBar.open("Added Successfully !!!", "Address Details", {
        duration: 5000, 
      });
      this.resetForm()
      this.loadAddressDetails();

      console.log(response);

// this.navigateservice.navigateTo('addressdetails');
      // this.router.navigate(['blank']);
    }, err => {
      console.log(err.error);
    });


  }

  loadAddressDetails(){


    let params = new HttpParams().set("userMasterID",this.user.usermasterid); 
    this.http.get(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/loadaddress',{ params: params}).subscribe(response => { 
      // this.addressDetailsres = response as AddressDetails[];
      this.dsaddressdetails = new MatTableDataSource(response as AddressDetails[]);
console.log(response as AddressDetails[]);
console.log(this.dsaddressdetails);

    }, err => {
      console.log(err.error);
    });

  }

  updateaddressdetails(form: NgForm){
    var data = { 
      'addresstitle': form.value.addresstitle,
      'county': form.value.county,
      'area': form.value.area,
      'address1': form.value.address1,
      'address2': form.value.address2,
      'landmark': form.value.landmark,
      'latitude': form.value.latitude,
      'longitude': form.value.longitude,
      'autonum':this.autoid,
      'usermasterid':this.user.usermasterid
    };
    const obj = JSON.stringify(data);
    console.log(obj);

    this.http.post(this.envUrl.urlAddress + '/kibsonsapi/addressdetails/updateaddress', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.snackBar.open("Updated Successfully!!!", "Address Details", {
        duration: 5000, 
      });
      this.resetForm()
      this.loadAddressDetails();
      // this.UpdateDisabled=true;
      // this.AddDisabled=false;
      console.log(response);
// this.navigateservice.navigateTo('addressdetails');
      // this.router.navigate(['blank']);
    }, err => {
      console.log(err.error);
    });
}

}

@Component({
  selector: 'dialog-openmap',  
  styleUrls: ['./addressdetails.component.scss'],
  templateUrl: './openmap.component.html',
})
export class DialogOpenMap implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;


  @ViewChild('search', { static: true }) public searchElementRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<DialogOpenMap>,  private snackBar: MatSnackBar, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, 
   
    @Inject(MAT_DIALOG_DATA) public data: any) { 



    }

  ngOnInit(): void { 
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autocomplete.addListener('place_changed',  () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
      // console.log( "Country :" + this.geoCoder.getCountryName());
      // console.log("Locality :" + this.geoCoder.getLocality());
    });

  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    // console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          console.log(results[0]);
          this.address = results[0].formatted_address;
          console.log(results[0].address_components[0].long_name);  //  .street_number
          console.log(results[0].address_components[1].long_name);
          console.log(results[0].address_components[2].long_name);
          console.log(results[0].address_components[3].long_name);
          console.log(results[0].address_components[4].long_name);
          console.log(results[0].address_components[4].short_name);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
CloseMapDialog(){
  
    this.dialogRef.close({ event: 'close', data: {"Latitude":this.latitude,"Longitude":this.longitude, "Address":this.address }});
  
}

  
}