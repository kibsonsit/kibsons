import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../guards/auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UseremailValidator {
    debouncer: any;

    constructor(public authService: AuthService, private snackBar: MatSnackBar,){}

    checkUserEmail(control: FormControl): any {

        clearTimeout(this.debouncer);
    
        return new Promise(resolve => {
    
          this.debouncer = setTimeout(() => {
    
            this.authService.validateUseremail(control.value).subscribe((res) => {
              if(res){
                resolve(null);
              }
            }, (err) => {
              this.snackBar.open("Email Already Registered !!!", "EMail Verification", {
                duration: 5000, 
              });
              resolve({'usernameInUse': true});
            });
          }, 1000);      
    
        });
}
}  