import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TareaStatus } from '../../enums/tarea-status.enum';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea-service.service';

@Component({
  selector: 'tareas-module-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent {
  //intectando servicio para utilizar sus metodos
  tareaService:TareaService=inject(TareaService);

  @Input()
  tarea!: Tarea;//confia en mi !, opcional ?
  @Input("tareaIndex")
  index:number=-1;

  @Output("onStatusChange")emitter:EventEmitter<TareaStatus>;

  tareaStatus={
    pendiente:TareaStatus.PENDIENTE,
    retrasado:TareaStatus.RETRASADO,
    compleatdo:TareaStatus.COMPLETADO
  }

  //constructor
  constructor(){
    this.emitter=new EventEmitter();
  }

  changeStatus(status: TareaStatus){
    if(this.index<0){
      return;
    }
    this.tarea.status=status;
    this.tareaService.updateTarea(this.index,this.tarea);

    this.emitter.emit(status);
  }



}
