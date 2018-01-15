import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/authService';

import { ContactPage } from '../pages/contact/contact';
import { MapsPage } from '../pages/maps/maps';
import { TabsPage } from '../pages/tabs/tabs';
import { CompanyListPage } from '../pages/companyList/companyList';
import { CategoryList } from '../pages/menu/categoryList/categoryList';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CartPage } from '../pages/cart/cart';

import { Cart } from '../providers/cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    ContactPage,
    MapsPage,
    LoginPage,
    CompanyListPage,
    CategoryList,
    TabsPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    ContactPage,
    MapsPage,
    LoginPage,
    CompanyListPage,
    CategoryList,
    TabsPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    AuthService,
    Cart,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
