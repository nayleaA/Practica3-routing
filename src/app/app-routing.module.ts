import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   //objetos de ruta
   {
      path:"tareas-module",
      loadChildren: ()=> import('./tareas-module/tareas-module.module').then((m)=>m.TareasModuleModule)
   },
   {
    path:"paises",
    loadChildren: ()=> import('./paises/paises.module').then((m)=>m.PaisesModule)
  },
   {
     path:'**', //si no esta declarado redirecciona
     redirectTo:'tareas-module'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
