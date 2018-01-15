import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/authService';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  user = {"username": "","password": "", "lockCode": "", "email": "", "active": "1"};

  constructor(public navCtrl: NavController, public authService:AuthService ) {
  }

  signup(){
      this.authService.postData(this.user,'signup').then((result) => {
      console.log("Result:");
      console.log(result);
      this.responseData = result;
      if(this.responseData){
        localStorage.setItem('username', JSON.stringify(this.responseData.username));
        localStorage.setItem('password', JSON.stringify(this.responseData.password));
        this.navCtrl.pop();
      }
      else{ 
        console.log("User already exists"); 
      }
    }, (err) => {
      // Error log
      console.log("ERROR:");
      console.log(err);
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
}