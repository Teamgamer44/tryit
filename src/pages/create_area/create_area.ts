import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { StorageHelper, Enums, Area } from '../../app/StorageHelper';
import { AreaDetailPage } from '../area_detail_page/area_detail_page';

@Component({
  selector: 'create-area',
  templateUrl: 'create_area.html'
})
export class CreateAreaPage {
  streets = [
    'Hauptstraße',
    'Nebenstraße',
  ];
  area:Area={
    id: 1,
    name: '',
    streets: []
  };
  constructor(public navCtrl: NavController,private storageHelper:StorageHelper, private toastCtrl: ToastController) {

  }

  saveArea() {
    this.storageHelper.save(Enums.Area,this.area);

    setTimeout(() => {
      this.navCtrl.pop();
      this.navCtrl.push(AreaDetailPage, { area: this.area });
    }, 300);

    let toast = this.toastCtrl.create({
      message: 'Das Gebiet \"' + this.area.name + '\" wurde erstellt.',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  addStreet() {

  }

  removeStreet(street) {}
}
