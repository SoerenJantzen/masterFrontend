import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CategoryList } from '../menu/categoryList/categoryList';

@Component({
  selector: 'page-company-list',
  templateUrl: 'companyList.html'
})
export class CompanyListPage {

  companies: any;
  tabs:any;
  cart = {"dueDatetime": "", "orderReceivedDatetime": "", "pickUpNumber": "", "companyId": "", "userId":"", "products": []};

  constructor(public navCtrl: NavController, public http: Http) {

  	this.tabs = "list";

    this.http.get('http://localhost:8080/frontend/company/allForListView').map(res => res.json()).subscribe(data => {
    	console.log("Companies: ");
    	console.log(data);

    	this.companies = data;
    });
  }

  showMenuForCompany(company) {

  	console.log("Company with id: " + company.id + " is selected.");
  	this.navCtrl.push(CategoryList, {
      company: company,
      cart: this.cart
    });
  }

  logout() {
  	console.log("LOGOUT");
  }

}
