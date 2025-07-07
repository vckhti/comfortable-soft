import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
  // @ts-ignore
  transform(value: any, args?: any[]): any[] {
    // check if "routes" exists
    if(value) {
      // create instance vars to store keys and final output
      let keyArr: any[] = Object.keys(value),
        // @ts-ignore
        dataArr = [];

      // loop through the object,
      // pushing values to the return array
      keyArr.forEach((key: any) => {
        dataArr.push(value[key]);
      });
      // return the resulting array
      // @ts-ignore
      return dataArr;
    }
  }
}
