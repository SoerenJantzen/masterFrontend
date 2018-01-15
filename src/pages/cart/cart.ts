import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cart } from '../../providers/cart';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public cart: Cart) {

  }

  addProduct(product) {
  	console.log("add product: " + product.id + " - " + product.name);
  	this.cart.addProduct(product);
  }

  removeProduct(product) {
  	console.log("remove product: " + product.id + " - " + product.name);
  	this.cart.removeProduct(product);
  }

}
