import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'create-area',
  templateUrl: 'create_area.html'
})
export class CreateAreaPage {
  streets = [
    'Hauptstraße',
    'Nebenstraße',
  ];

  constructor(public navCtrl: NavController) {

  }

  removeStreet(street) {}
}
