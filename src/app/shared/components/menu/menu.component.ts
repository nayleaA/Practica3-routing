import { Component } from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItem: MenuItem[]=[];

  //agrrgar elementos antes que se invoque
  tareaMenuItems:MenuItem[]=[];
  paisesMenuItems:MenuItem[]=[];
  
  constructor(){
    this.tareaMenuItems.push({route:'/tareas-module/mi-lista',text:'Mis tareas'});
    this.tareaMenuItems.push({route:'/tareas-module/nueva-tarea',text:'Agregar tareas'});
    this.paisesMenuItems.push({route:'/paises/por-continente',
  text:'Buscar por continente'})
  this.paisesMenuItems.push({route:'/paises/por-pais',
  text:'Buscar por nombre'})
  }

}
