import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar-referencia',
    loadChildren: () => import('./componentes/registrar-referencia/registrar-referencia.module').then( m => m.RegistrarReferenciaPageModule)
  },
  {
    path: 'eliminar-referencia',
    loadChildren: () => import('./componentes/eliminar-referencia/eliminar-referencia.module').then( m => m.EliminarReferenciaPageModule)
  },
  {
    path: 'ver-referencia',
    loadChildren: () => import('./componentes/ver-referencia/ver-referencia.module').then( m => m.VerReferenciaPageModule)
  },
  {
    path: 'editar-referencia',
    loadChildren: () => import('./componentes/editar-referencia/editar-referencia.module').then( m => m.EditarReferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
