import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  displayOtpfield: boolean = false;
  otpGenerated!: number;
  otpTimer!:number;

  constructor() {

  }

  ngOnInit() {

  }

  getOtp() {
    this.displayOtpfield = true;
    this.otpGenerated = this.generateRandomNumber()
    console.log("OTP",this.otpGenerated);
    var subs = interval(1000).subscribe({
      next:(response:any)=>{
        this.otpTimer = 60 - response;
        if(this.otpTimer == 0 ){
          subs.unsubscribe();
        }
      }
    })
  }

  verifyOtp() {
    this.displayOtpfield = false;

  }

  generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
      .random() * (maxm - minm + 1)) + minm;
  }
}
