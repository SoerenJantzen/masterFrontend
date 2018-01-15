import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { MapsPage } from '../maps/maps';
import { CompanyListPage } from '../companyList/companyList';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CompanyListPage;
  tab2Root = MapsPage;
  tab3Root = CartPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
