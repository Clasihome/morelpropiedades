import { Pipe, PipeTransform } from '@angular/core';
import { Property } from '../interfaces/interfaces';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: number , currency: String): string {
    let numb = '';

    switch (currency) {
      case 'UF':
        numb = 'UF ' + new Intl.NumberFormat('de-DE').format(Math.round(value * 100) / 100);
        break;
      case 'CLP':
         const roundValue = parseInt((Math.round(value * 100) / 100).toFixed(2).replace('.',',').replace(',00', ''));
         numb = '$' +  new Intl.NumberFormat('de-DE').format(roundValue);
         break;

      default:
        numb = value.toString();
        break;
    }

    return numb.toString();
  }

}
