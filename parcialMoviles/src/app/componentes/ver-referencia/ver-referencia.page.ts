import { Component, OnInit } from '@angular/core';
import { ReferenciaService } from '../../servicios/referencia.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Referencia } from '../../models/referencia';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-ver-referencia',
  templateUrl: './ver-referencia.page.html',
  styleUrls: ['./ver-referencia.page.scss'],
})
export class VerReferenciaPage implements OnInit {

  id: string = null;
  ref: Referencia = {
    idreferencia: 0,
    titulopub: "",
    autores: "",
    tipopub: 0,
    eventorevista: "",
    doi: "",
    anyopub: 0,
    id: "",
    isEdit: false
  };
  list: Referencia[] = []

  constructor(private referenciaService: ReferenciaService, private route: ActivatedRoute, private router: Router, private aut: AutenticacionService) { }

  ngOnInit() {
    if(this.aut.getToken() == null){
      this.router.navigate(['/login']);
      alert('¡Debes iniciar sesión primero!')
    }else{
      
      this.id = this.route.snapshot.params['id'];
      console.log(this.id)
    
      this.referenciaService.getReferencias().subscribe(
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
            if(this.list[i].id == this.id){
              this.ref = {
                idreferencia: this.list[i].idreferencia,
                titulopub: this.list[i].titulopub,
                autores: this.list[i].autores,
                tipopub: this.list[i].tipopub,
                eventorevista: this.list[i].eventorevista,
                doi: this.list[i].doi,
                anyopub: this.list[i].anyopub,
                id: this.list[i].id,
                isEdit: this.list[i].isEdit
              }
            }
          }
      
        }
      )
    }
  }

  eliminar(){
    this.referenciaService.deleteReferencia(this.id);
    alert("Eliminado con exito");
    this.router.navigate(['/home']);
  }

}
