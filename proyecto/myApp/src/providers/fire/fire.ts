//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


/*
  Generated class for the FireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireProvider {

  constructor(public afdb: AngularFireDatabase, public afauth: AngularFireAuth) {
    console.log('Hello FireProvider Provider');
  }

  getData(){
    return this.afdb.list('NameBus')/*.valueChanges()*/;
    //console.log('hola');
  }
}
