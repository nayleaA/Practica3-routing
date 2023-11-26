import { Component, inject } from '@angular/core';
import { SmallCountry } from '../../models/paises.models';
import { PaisesService } from '../../services/paises.service';

@Component({
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  private paisesService:PaisesService=inject(PaisesService);
  paises:SmallCountry[]=[];

onEnterPressed(valor:string){
 // console.log('holis', valor);
  this.buscarPaisesPorNombre(valor);
}

buscarPaisesPorNombre(nombre:string){
  this.paisesService.getCountriesByName(nombre)
    .subscribe(
      (countries)=>{
        console.log(countries);
        this.paises=countries;
      }
    );
}
}
