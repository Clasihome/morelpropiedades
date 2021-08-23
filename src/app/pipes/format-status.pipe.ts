import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStatus'
})
export class FormatStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      case 'RESERVADA':
        return 'PROMESA';
      
      case 'PUBLICADA':
        return 'DISPONIBLE';
            
      default:
        return value;
    }
    
  }

}
