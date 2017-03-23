import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-especies',
  templateUrl: 'especies.html'
})
export class EspeciesPage {
  especies;
  constructor(public navCtrl: NavController) {
    this.especies = [
      {
        titulo: "Bagre",
        imagen:"assets/especies/bagre.jpg"
      },
      {
        titulo: "Cachama",
        imagen:"assets/especies/cachama.jpg"
      },
      {
        titulo: "Capaz",
        imagen:"assets/especies/capaz.jpg"
      },
      {
        titulo: "Mojarra",
        imagen:"assets/especies/mojarra.jpg"
      },
      {
        titulo: "Tilapia",
        imagen:"assets/especies/tilapia.jpg"
      }
    ];
  }



  getEspecies(ev) {
    // Reset items back to all of the items

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {


      this.especies = this.especies.titulo.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
