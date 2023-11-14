import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea-service.service';

@Component({
  templateUrl: './mi-lista-page.component.html',
  styleUrls: ['./mi-lista-page.component.css']
})
export class MiListaPageComponent implements OnInit {
  tareas: Tarea[]=[];

  //Injectar servicio por metodo de angular (v.14 en adelante) espera la ruta
  private tareaService:TareaService=inject(TareaService);

  //opcion2: Injectar servicio por contructor, funciona para venores 14, para todas las versiones
  constructor(private tareaServiceCons:TareaService){
  }

  ngOnInit(): void {
    this.tareas=this.tareaService.getTareas();
  }
}
