import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {

  transform(value: any, args: any): any {
      
    // Remove the duplicate elements
      if(value.length === 0) {
        return value;
      }

      const resultArray = [];
      const unique = [];
      const distinct = [];
          for( let i = 0; i < value.length; i++ ){
            if(value[i][args]) {
              if( !unique[value[i][args]]){
                resultArray.push(value[i]);
                unique[value[i][args]] = 1;
              }
          }
        }
      
      return resultArray;
  }

}
