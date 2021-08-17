import { Pipe, PipeTransform } from '@angular/core';
import { Propiedad, Property } from '../interfaces/interfaces';

@Pipe({
  name: 'caracteristicasCard'
})
export class CaracteristicasCardPipe implements PipeTransform {

  private _getValueCharByName(characteristics, name: string) {
    console.log(name);
    return characteristics.filter(c => c.name === name)[0].value
  }

  transform(value: Property, ...args: any[]): any {


    /*
      <ul *ngFor="let c of propiedad.characteristics; index as i">
      <li *ngIf="c.name == 'Superficie útil'"><b>Sup. Const.</b><br/> {{c.value}} mt<sup>2</sup>.</li>
      <li *ngIf="c.name == 'Superficie total'"><b>Sup. total</b><br/>{{c.value}} mt<sup>2</sup>.</li>
      <li *ngIf="c.name == 'Habitaciones'"><b>Habitaciones</b><br/>{{c.value}}</b> </li>
      <li *ngIf="c.name == 'N° de privados'"><b>Privado/s</b><br/>{{c.value}}</b> </li>
      <li *ngIf="c.name == 'Estacionamientos'"><b>Estacionamientos</b><br/>{{c.value}}</li>
      <li *ngIf="c.name == 'Baños'"><b>Baños</b><br/>{{c.value}}</li>
      <li *ngIf="c.name == 'Gastos comunes'"><b>Gasto común</b><br/>{{c.value}}</li>
   </ul> */


    switch (value.propertyType) {
      case 'DEPARTAMENTO':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Dormitorios</span> ' + this._getValueCharByName(value.characteristics, 'Habitaciones') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'CASA':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Dormitorios</span> ' + this._getValueCharByName(value.characteristics, 'Habitaciones') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'OFICINA':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Privados</span> ' + this._getValueCharByName(value.characteristics, 'N° de privados') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'LOCAL':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Privados</span> ' + this._getValueCharByName(value.characteristics, 'N° de privados') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'AGRICOLA':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li></li>' +
          '<li></li>';
        break;

      case 'BODEGA':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li></li>';
        break;

      case 'ESTACIONAMIENTO':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li></li>' +
          '<li></li>';
        break;

      case 'INDUSTRIAL':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li></li>';
        break;

      case 'PARCELA':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Dormitorios</span> ' + this._getValueCharByName(value.characteristics, 'Habitaciones') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'TERRENO':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li></li>' +
          '<li></li>';
        break;

      case 'LOTEO':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li></li>' +
          '<li></li>';
        break;

      case 'CABANA':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Dormitorios</span> ' + this._getValueCharByName(value.characteristics, 'Habitaciones') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'HOTEL':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Dormitorios</span> ' + this._getValueCharByName(value.characteristics, 'Habitaciones') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'NEGOCIO':
        return '<li><span>Sup. útil</span>' + this._getValueCharByName(value.characteristics, 'Superficie útil') + ' m²</li>' +
          '<li><span>Privados</span> ' + this._getValueCharByName(value.characteristics, 'N° de privados') + '</li>' +
          '<li><span>Baños</span> ' + this._getValueCharByName(value.characteristics, 'Baños') + '</li>';
        break;

      case 'PANO':
        return '<li><span>Sup. total</span>' + this._getValueCharByName(value.characteristics, 'Superficie total') + ' m²</li>' +
          '<li></li>' +
          '<li></li>';
        break;

      default:
        break;
    }

  }

}
