import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-category-list',
  templateUrl: 'categoryList.html'
})
export class CategoryList {

  categories: any;
  companyName:any;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {

    this.http.get('http://localhost:8080/frontend/category/forCompanyId/' + navParams.get('companyId')).map(res => res.json()).subscribe(data => {
    	console.log("Categories of Company with id: " + navParams.get('companyId'));
    	console.log(data);

    	this.categories = data;
      this.companyName = navParams.get('companyName');
    });
  }

}
