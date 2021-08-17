import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../interfaces/interfaces';

@Component({
  selector: 'app-card-propiedad',
  templateUrl: './card-propiedad.component.html',
  styleUrls: ['./card-propiedad.component.sass']
})
export class CardPropiedadComponent implements OnInit {
  @Input() p: Property;
  ufValue: number;
  chars: any = { supTotal: '0', supUtil: '0', banios: '0', habitaciones: '0' };

  constructor() {
    this.ufValue = parseFloat(localStorage.getItem('uf'));
  }

  ngOnInit() {
    this.chars.supTotal = this._getValueCharByName('Superficie total');
    this.chars.supUtil = this._getValueCharByName('Superficie útil');
    this.chars.habitaciones = this._getValueCharByName('Habitaciones');
    this.chars.banios = this._getValueCharByName( 'Baños');
  }

  getCurrencySecondary() {
    if (this.p.currency === 'UF') {
      return 'CLP';
    } else {
      return 'UF';
    }
  }

  getValueSecondary() {
    if (this.p.currency === 'UF') {
      return this.p.value * this.ufValue;
    } else {
      return this.p.value / this.ufValue;
    }
  }

  _getValueCharByName( name: string) {
    const chars = this.p.characteristics;
    const response = chars.filter(c => c.name === name)[0].value.toString();
    if (response) {
      return response;
    } else {
      return '-';
    }
  }

}
