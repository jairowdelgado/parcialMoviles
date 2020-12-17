import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"
import { rejects } from 'assert';
import { resolve } from 'dns';
import { LoginPage } from '../componentes/login/login.page';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private angularAutenticacion : AngularFireAuth) { }
    login(usuario:string, contrasenia:string){
      return new Promise((resolve,rejects) =>{
        this.angularAutenticacion.signInWithEmailAndPassword(usuario,contrasenia).then(user =>{
          resolve(user);
          }).catch(err => rejects(err))
      })
      
    }
  
}
