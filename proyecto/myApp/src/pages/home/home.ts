import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FireProvider } from '../../providers/fire/fire';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  NameBus: any = [];
  constructor(public navCtrl: NavController, public afdb: FireProvider) {
    //this.NameBus = [];
    /*fireprovide.getData()
      .subscribe(nameBus =>{
        this.NameBus = nameBus;
        console.log(this.NameBus);
      });*/

  }

  ionViewDidLoad() {
    /*this.afdb.getData().subscribe((resp) => {
      this.NameBus = resp;
      console.log(resp);
      //console.log(this.reservas);
     }
    );*/
  }

  getDatos(NameBus){
    this.afdb.getData()/*.valueChanges().subscribe((resp) => {
      console.log(resp);
     }
    );*/
    console.log(this.afdb.getData().valueChanges());
    
  }

}
