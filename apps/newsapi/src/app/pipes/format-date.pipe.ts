import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    if(value.length === 0) {
      return value;
    }

    let timestamp = new Date(value).getTime();
    let day = new Date(timestamp).getDate();
    let month = new Date(timestamp).getMonth() + 1;
    let year = new Date(timestamp).getFullYear();
    return day+'/'+month+'/'+year;
  }

}
