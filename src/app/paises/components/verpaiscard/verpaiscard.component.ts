import { Component, Input } from '@angular/core';
import { Country, EngEnum } from '../../models/paises.models';

@Component({
  selector: 'verpaiscard',
  templateUrl: './verpaiscard.component.html',
  styleUrls: ['./verpaiscard.component.css']
})
export class VerpaiscardComponent {
  @Input()
  verpais!:Country;

  nativeName: string = '';
  

  ngOnInit(): void {
    this.extractNativeName();
   
  }

  extractNativeName(): void {
    const keys = Object.keys(this.verpais.name.nativeName);
    const key = keys[keys.length - 1];
    this.nativeName = this.verpais.name.nativeName[key].official;
  }
  
}
