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

  continenteValues: string[]=Object.values(Continente);

  continenteSeleccionado:string='';

   //del models que no hice
   paises:SmallCountry[]=[];

  changeContinenteSeleccionado(index:number){
    const continente=this.continenteValues[index];

    if(this.continenteSeleccionado == continente){
    this.continenteSeleccionado='';
    this.clearPaises();
    return;}
    this.continenteSeleccionado=continente;
    //solicitar datos a restCountries
    this.requestCountries();
  }

  clearPaises(){
    this.paises=[];
  }

  requestCountries(){
    
    this.paisesService.getCountriesByRegion(this.continenteSeleccionado)
    .subscribe(
      (countries)=>{
        console.log(countries);
      this.paises=countries;
      }
    );
  }
 
}
