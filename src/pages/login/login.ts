import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AuthService } from '../../providers/authService';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  responseData : any;
  user = {"username": "","password": "", "lockCode": "", "email": "", "active": "1"};

  constructor(public navCtrl: NavController, public authService:AuthService) {
  	console.log("Login Page constructor invoked.");
  }

  login(){
    this.authService.postData(this.user,'login').then((result) => {
      console.log("Result:");
      console.log(result);
      this.responseData = result;
      if(this.responseData){
        this.navCtrl.push(TabsPage, {}, {animate: false});
      }
      else{ 
        console.log("User doesn't exist..First register."); 

      }
    }, (err) => {
      // Error log
      console.log("ERROR:");
      console.log(err);
    });
  }

  signup() {
  	this.navCtrl.push(SignupPage, {}, {animate: false});
  }

}