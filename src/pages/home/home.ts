import { AreaDetailPage } from './../area_detail_page/area_detail_page';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAreaPage } from '../create_area/create_area';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * Demodaten
   */
  items = [
    'Andernach',
    'Mülheim-Kärlich',
    'Neuwied',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  navigateToCreateAreaPage() {
    this.navCtrl.push(CreateAreaPage);
  }

  removeItem(item) {}

  navigateToDetailPage(item) {
    this.navCtrl.push(AreaDetailPage, { 
      title: item 
    });
  }
}
