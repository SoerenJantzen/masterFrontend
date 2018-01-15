import { Injectable } from '@angular/core';

@Injectable()
export class Cart {
	userId: any;
	company: any;
	products: any;

	constructor() {
		this.userId = null;
		this.company = null;
		this.products = [];
	}

	/**
	 * Adds the given product to the current cart.
	 * If product already exists in cart, then just increase the counter.
	 */
	addProduct(productToAdd) {
		
		var productExists = false;
		for (var i = 0; i < this.products.length; i++) {
			console.log("ID: " + this.products[i].product.id + " - " + productToAdd.id);
			if (this.products[i].product.id == productToAdd.id) {
				console.log("Produkt mit id: " + productToAdd.id + " existiert");
				this.products[i].count += 1;
				productExists = true;
			}
		}
		if(!productExists) {
			console.log("Produkt mit id: " + productToAdd.id + " existiert noch nicht.");
			this.products.push({product: productToAdd, count: 1});
		}
	}

	/**
	 * Removes the given product from the current cart.
	 * If product exists more than one time in the current cart, than just
	 * decrease the counter of this product. If products exists only once in
	 * current cart, than delete it from cart.
	 */
	removeProduct(productToRemove) {
		for (var i = 0; i < this.products.length; i++) {
			if (this.products[i].product.id == productToRemove.id) {
				if (this.products[i].count > 1) {
					this.products[i].count -= 1;
				}
				else {
					this.products.splice(i,1);
				}
			}
		}
	}

	/**
	 * Gets the count of all products, assigned to the current cart.
	 */
	getProductsCount() : number {
		var count = 0;
		for (let prod of this.products) {
			count += prod.count;
		}
		return count;
	}

	toString() {
		console.log("current cart: ");
		console.log("UserId: " + this.userId);
		console.log("CompanyId: " + this.company.id);
		console.log("Products: ");
		console.log(this.products);
	}
}
