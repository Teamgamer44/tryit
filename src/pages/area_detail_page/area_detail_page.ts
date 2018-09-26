import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'area-detail',
  templateUrl: 'area_detail_page.html'
})
export class AreaDetailPage {
  title = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data.title;
  }
}
