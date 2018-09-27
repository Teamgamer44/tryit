import { AreaDetailPage } from './../area_detail_page/area_detail_page';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAreaPage } from '../create_area/create_area';
import { DummyArea, Area, StorgeHelper, Enums } from '../../app/StorageHelper';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
ionViewWillEnter(){
 this.load();
}
    /**
     * Demodaten
     */
    items: Area[] = [];
    // 'Andernach',
    // 'Mülheim-Kärlich',
    // 'Neuwied',
    //];

    constructor(public navCtrl: NavController, public navParams: NavParams,private storgeHelper:StorgeHelper) {

    }

    // ngOnInit() {
    //     this.load();
    // }

    private load() {
        this.items = this.storgeHelper.load(Enums.Area);
    }



    navigateToCreateAreaPage() {
        this.navCtrl.push(CreateAreaPage);
    }

    removeItem(item) { }

    navigateToDetailPage(area) {
        this.navCtrl.push(AreaDetailPage, {
            area: area
        });
    }
}
