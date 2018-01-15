import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoryList } from '../menu/categoryList/categoryList';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  geocoder: any;
  companies: any;

  constructor(public navCtrl: NavController, public http: Http) {
  	this.http.get('http://localhost:8080/frontend/company/allForListView').map(res => res.json()).subscribe(data => {
    	console.log("Companies: ");
    	console.log(data);

    	this.companies = data;

    	this.loadMap();
    });
  }

  loadMap() {

  	let latLng = new google.maps.LatLng(52.519007, 13.404438);

  	let mapOptions = {
  		center: latLng,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		fullscreenControl:false,
  		mapTypeControl:false,
  		scaleControl:false,
  		zoomControl:false,
  		streetViewControl:false
  	}

  	this.geocoder = new google.maps.Geocoder();
  	let tempMap = this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  	let tempNavCtrl = this.navCtrl;

  	/*
  	 * add Marker for all companies
  	 */
  	for (let company of this.companies) {

  		this.geocoder.geocode({'address' : company.address.street + ', ' + company.address.zip + ', ' + company.address.city}, function(results, status) {
  			if (status == 'OK') {
  				
  				/*
  				 * Create new marker for the geocoded address of the current company
  				 */
  				tempMap.setCenter(results[0].geometry.location);
  				let marker = new google.maps.Marker({
		  			map:tempMap,
		  			position: results[0].geometry.location
	  			});

	  			/*
	  			 * TODO create Infowindow for the new created marker
	  			 */

	  			/*
	  			 * Add click-listener for the new created marker
	  			 */
	  			google.maps.event.addListener(marker, 'click', () => {
				    tempNavCtrl.push(CategoryList, {
				      company:company
				    });
				});
  			}
  			else {
  				console.log('Geocode was not successful for the following reason: ' + status);
  			}
  		});
  	}
  }

  logout() {
  	console.log("LOGOUT");
  }
}