import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tareasGuardCanActivate, tareasGuardCanMatch } from '../shared/guards/tareas.guard';
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
        component: MiListaPageComponent,
        canActivate:[tareasGuardCanActivate],
        canMatch:[tareasGuardCanMatch]
      },
      {
        path:'nueva-tarea',
        component: FormularioPageComponent
      },
      {
        path:'**',
        redirectTo:'nueva-tarea'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasModuleRoutingModule { }
