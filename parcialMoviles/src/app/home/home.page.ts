import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Referencia } from '../models/referencia';
import { ReferenciaService } from '../servicios/referencia.service';
import { AutenticacionService } from '../servicios/autenticacion.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  referencias: Referencia[]

  list = []

  constructor(private RefService: ReferenciaService, private aut: AutenticacionService, private router: Router) {}

  ngOnInit(){

    if(this.aut.getToken() == null){
      this.router.navigate(['/login']);
      alert('¡Debes iniciar sesión primero!')
    }else{

    this.RefService.getReferencias().subscribe(
      data => {
        this.list = data.map(e =>{
          return{
            id: e.payload.doc.id,
            isEdit: false,
            idreferencia: e.payload.doc.data()['idreferencia'],
            titulopub: e.payload.doc.data()['titulopub'],
            autores: e.payload.doc.data()['autores'],
            tipopub: e.payload.doc.data()['tipopub'],
            eventorevista: e.payload.doc.data()['eventorevista'],
            doi: e.payload.doc.data()['doi'],
            anyopub: e.payload.doc.data()['anyopub']
          };
        })
        this.RefService.list = this.list;
      }
    )

    }
  }

}
