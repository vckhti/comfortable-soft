import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProperty'
})
export class GetPropertyPipe implements PipeTransform {
  transform(obj: any): any {

    if (obj && obj.length > 0) {
      return obj[0].Address;
    }
    return undefined;
  }
}
