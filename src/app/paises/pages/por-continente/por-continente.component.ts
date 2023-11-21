import { Component, inject } from '@angular/core';
import { Continente } from '../../enums/continente.enum';
import { SmallCountry } from '../../models/paises.models';
import { PaisesService } from '../../services/paises.service';

@Component({
  templateUrl: './por-continente.component.html',
  styleUrls: ['./por-continente.component.css']
})
export class PorContinenteComponent {
  paisesService:PaisesService=inject(PaisesService);
  //arreglo
  botonesContinente:string[]=Object.keys(Continente);
  continenteSeleccionado:string='';

  changeContinenteSeleccionado(continente:string){
    if(this.continenteSeleccionado == continente){
    this.continenteSeleccionado='';
    this.clearPaises();
    return;}
    this.continenteSeleccionado=continente;
    //solicitar datos a restCountries

  }

  clearPaises(){
    this.paises=[];
  }

  //del models que no hice
  paises:SmallCountry[]=[];
  
}
