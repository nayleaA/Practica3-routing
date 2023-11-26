import { Component, Input } from '@angular/core';
import { SmallCountry } from '../../models/paises.models';

@Component({
  selector: 'pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.css']
})
export class PaisCardComponent {
  @Input()
  country!:SmallCountry;

  nativeName: string = '';

  ngOnInit(): void {
    this.extractNativeName();
  }

  extractNativeName(): void {
    const keys = Object.keys(this.country.name.nativeName);
    const key = keys[keys.length - 1];
    this.nativeName = this.country.name.nativeName[key].official;
  }

}
