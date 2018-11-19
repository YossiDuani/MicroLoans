import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  rate: number;
  amount: number;
  sum: number;


  constructor(public navCtrl: NavController) {
  }


  onClick() {
    this.sum = this.rate * this.amount;


  }
}
