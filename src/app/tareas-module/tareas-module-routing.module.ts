import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasLayoutComponent } from './layout/tareas-layout/tareas-layout.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { MiListaPageComponent } from './pages/mi-lista-page/mi-lista-page.component';

//rutas hijas
const routes: Routes = [
  {
    //que tome el que ya le esta indicando
    path:'',
    component: TareasLayoutComponent,
    children:[
      {
        path:'mi-lista',
        component: MiListaPageComponent
      },
      {
        path:'nueva-tarea',
        component: FormularioPageComponent
      },
      {
        path:'**',
        redirectTo:'mi-lista'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasModuleRoutingModule { }
