import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorgeHelper, Enums, Area } from '../../app/StorageHelper';

@Component({
  selector: 'create-area',
  templateUrl: 'create_area.html'
})
export class CreateAreaPage {
  streets = [
    'Hauptstraße',
    'Nebenstraße',
  ];
  area:Area={};
  constructor(public navCtrl: NavController,private storgeHelper:StorgeHelper) {

  }

  saveArea() {
this.storgeHelper.save(Enums.Area,this.area);
  }

  removeStreet(street) {}
}
