import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService{
//disponible para toda la aplicacion
private tareasKey="tareas";
private tareas: Tarea[]=[];

  constructor() {
    const lSTareas= localStorage.getItem(this.tareasKey);

    //preguntar si no viene nulo
    if(lSTareas){
      this.tareas=JSON.parse(lSTareas);
    }

   }
   agregarTarea(tarea:Tarea){
    this.tareas.push(tarea);
    this.AlmacenarDatos();
   }

   private AlmacenarDatos(){
    localStorage.setItem(this.tareasKey, JSON.stringify(this.tareas));
   }

   getTareas(): Tarea[]{
    return this.tareas;
  }

  updateTarea(index:number, tarea:Tarea){
    this.tareas[index]=tarea;
    this.AlmacenarDatos();
  }

  //para el guardia boleano
  /*isTareasEmpty():boolean{
    return this.tareas.length<=0;
  }*/

  //para observable guardia 
  isTareasEmpty():Observable<boolean>{
    return of(this.tareas.length<=0);
  }
}
