import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { StorageHelper, Enums, Area } from '../../app/StorageHelper';
import { HomePage } from '../home/home';


@Component({
  selector: 'area-detail',
  templateUrl: 'area_detail_page.html'
})
export class AreaDetailPage implements OnInit {
  area:Area;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private storageHelper:StorageHelper) {
    this.area = this.navParams.data.area;
  }

  ngOnInit(){
    this.load();
  }

  delete() {
    const confirm = this.alertCtrl.create({
      title: 'Gebiet entfernen',
      message: 'Das Gebiet wird aus deiner Kollektion entfernt. Möchtest du fortfahren?',
      buttons: [
        {
          text: 'Nein',
        },
        {
          text: 'Ja',
          handler: () => {
            this.storageHelper.delete(Enums.Area, this.area.id);
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });

    confirm.present();
  }

  private load(){
    this.storageHelper.load(Enums.Area );
  }
}
