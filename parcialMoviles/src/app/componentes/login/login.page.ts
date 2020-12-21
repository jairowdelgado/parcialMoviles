import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../../servicios/autenticacion.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario:string;
  contrasenia:string;

  constructor(private autenticacionService : AutenticacionService, public router: Router) { }

  ngOnInit() {
    if(this.autenticacionService.getToken() != null ){
      this.router.navigate(['/home'])
    }
  }

  iniciarSesion(){
    this.autenticacionService.login(this.usuario,this.contrasenia).then(res =>{
      this.autenticacionService.setToken("sesiónActiva");
      this.router.navigate(['/home']);
    }).catch(err => alert('Las credenciales son incorrectas o no coinciden'))
  }


}
