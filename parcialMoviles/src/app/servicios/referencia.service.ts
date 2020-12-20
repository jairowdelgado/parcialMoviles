import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Referencia, ReferenciaPush } from '../models/referencia';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  
  public list: Referencia[] = null;

  // infos = [];
  // ref = firebase.database()

  nameRef = "Referencia"

  constructor(private db:AngularFirestore) {}

  getReferencias(){
    // return this.referencias;
    return this.db.collection(this.nameRef).snapshotChanges();
  }

  getRerefencia(id: string){
    // return this.referenciasCollection.doc<Referencia>(id).valueChanges();
    return this.db.doc(this.nameRef + '/' + id).get()
  }

  putReferencia(referencia: Referencia, id: string){
    // return this.referenciasCollection.doc(id).update(referencia);
    return this.db.doc(this.nameRef + '/' + id).update(referencia);
  }

  pushReferencia(referencia: ReferenciaPush){
    console.log("Creando...")
    this.db.collection("Referencia").add(referencia);
    // this.referenciasCollection.add(referencia);
  }

  deleteReferencia(id: string){
    console.log("Eliminado...")
    return this.db.doc(this.nameRef + '/' + id).delete();
  }

}

