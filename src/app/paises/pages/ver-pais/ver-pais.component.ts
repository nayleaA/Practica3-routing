import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { Country } from '../../models/paises.models';
import { PaisesService } from '../../services/paises.service';

@Component({
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
activatedRoute:ActivatedRoute=inject(ActivatedRoute);

private paisesService:PaisesService=inject(PaisesService);
paises!:Country;

ngOnInit():void{
  //usar el servicio para traer datos del pais
  this.activatedRoute.params.pipe(
    //switchMap(({cca3})=>of(cca3))
    //conversion de observables, con objetos que tiene un observable y transformarlo en otro observable.
    switchMap(({cca3})=>this.paisesService.getCountryByCca3(cca3))
    //,switchMap(({country})=>this.paisesService.getCountryByName(country.name.official))
  ).subscribe(
    (pais)=>{
      //Guardar para despues utilizar la info del pais
      //console.log("el pais "+pais);
      this.paises=pais;
    }
  );
}
}
