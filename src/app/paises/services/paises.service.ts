import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, map,of } from 'rxjs';
import { Continente } from '../enums/continente.enum';
import { Country, SmallCountry } from '../models/paises.models';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  static getCountryByCca3(cca3: any): any {
    throw new Error('Method not implemented.');
  }
  private baseurl:string='https://restcountries.com/v3.1';

  //para peticiones
  private http: HttpClient=inject(HttpClient);

  constructor() { }

  getCountriesByRegion(region:string):Observable<SmallCountry[]>{
    const url=`${this.baseurl}/region/${region}`;
    return this.http.get<SmallCountry[]>(url).pipe(
      catchError(error=>of([]))
    );
    }

  getCountriesByName(name:string): Observable <SmallCountry[]>{
    const url=`${this.baseurl}/name/${name}`;
    return this.http.get<SmallCountry[]>(url).pipe(
      catchError(error=>of([]))
    );
  }

  getCountryByCca3(cca3:string): Observable <Country>{
    const url=`${this.baseurl}/alpha/${cca3}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries)=>countries[0]),catchError(error=> of())
    );
  }

}
