import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpiarTelCaptador'
})
export class LimpiarTelCaptadorPipe implements PipeTransform {

  transform(value: string): string {
    const re = / /gi;
    const newstr = value.replace(re, '').replace('+', '').replace(')', '').replace('(', '');
    return newstr;
  }

}
