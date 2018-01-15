import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cart } from '../../../providers/cart';

@Component({
  selector: 'page-category-list',
  templateUrl: 'categoryList.html'
})
export class CategoryList {

  categories: any;
  company: any;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public cart: Cart) {

    this.company = navParams.get('company');

    this.http.get('http://localhost:8080/frontend/category/forCompanyId/' + this.company.id).map(res => res.json()).subscribe(data => {
    	console.log("Categories of Company with id: " + this.company.id);
    	console.log(data);

    	this.categories = data;
    });
  }

  addToCart(productId) {
    console.log("Add product with id: " + productId + " to current cart");
    if (this.cart.company == undefined || this.cart.company == null ) {
      console.log("Currently there is no company set for the current cart. Set one.");
      this.cart.company = this.company;
    }
    //this.cart.products.push(this.getProductById(productId));
    this.cart.addProduct(this.getProductById(productId));
  }

  getProductById(productId) {
    for (let cat of this.categories) {
      for (let prod of cat.products) {
        if(prod.id == productId) {
          console.log("Prod: ");
          console.log(prod);
          return prod;
        }
      }
    }
  }

}
