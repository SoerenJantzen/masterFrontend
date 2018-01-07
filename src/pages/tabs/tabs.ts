import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MapsPage } from '../maps/maps';
import { CompanyListPage } from '../companyList/companyList';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CompanyListPage;
  tab2Root = MapsPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
