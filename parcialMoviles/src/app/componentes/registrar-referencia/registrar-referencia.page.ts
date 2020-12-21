import { Component, OnInit } from '@angular/core';
import { ReferenciaService } from '../../servicios/referencia.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Referencia, ReferenciaPush } from '../../models/referencia';
import { ActivatedRoute, Router } from '@angular/router'
//import { Console } from 'console';


@Component({
  selector: 'app-registrar-referencia',
  templateUrl: './registrar-referencia.page.html',
  styleUrls: ['./registrar-referencia.page.scss'],
})
export class RegistrarReferenciaPage implements OnInit {

  id: string = ""
  list: Referencia[] = []
  esEditar: boolean = false;

  ref: ReferenciaPush = {
    idreferencia: 0,
    titulopub: "",
    autores: "",
    tipopub: 0,
    eventorevista: "",
    doi: "",
    anyopub: 0,
  }

  constructor(private refService: ReferenciaService, private route: ActivatedRoute, private router: Router, private aut: AutenticacionService) { }

  ngOnInit() {

    if(this.aut.getToken() == null){
      this.router.navigate(['/login']);
      alert('¡Debes iniciar sesión primero!')
    }

    this.id = this.route.snapshot.params['id'];
    if(this.id != null){
      this.refService.getReferencias().subscribe(
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
          for(var i = 0; i < this.list.length; i++){
            console.log(this.id)
            this.esEditar = true;
            if(this.list[i].id == this.id){
              this.ref = {
                idreferencia: this.list[i].idreferencia,
                titulopub: this.list[i].titulopub,
                autores: this.list[i].autores,
                tipopub: this.list[i].tipopub,
                eventorevista: this.list[i].eventorevista,
                doi: this.list[i].doi,
                anyopub: this.list[i].anyopub
              }
            }
          }
      
        }
      )
    }

  }

  registrar(){

    if(this.esEditar){
      this.refService.putReferencia(this.ref, this.id)
      alert('Referencia editada con exito')
      this.router.navigate(['/home']);      
    }else{
      this.refService.pushReferencia(this.ref);
      alert('Referencia ingresada con exito')
      this.router.navigate(['/home']);
    }
  }

}
