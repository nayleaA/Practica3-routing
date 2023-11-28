import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tareasGuardCanActivate, tareasGuardCanMatch } from './shared/guards/tareas.guard';

const routes: Routes = [
   //objetos de ruta
   {
      path:"tareas-module",
      loadChildren: ()=> import('./tareas-module/tareas-module.module').then((m)=>m.TareasModuleModule)
   },
   {
    path:"paises",
    loadChildren: ()=> import('./paises/paises.module').then((m)=>m.PaisesModule),
    canActivate:[tareasGuardCanActivate],
    canMatch:[tareasGuardCanMatch]
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
