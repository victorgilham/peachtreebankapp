import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(values: any[], searchTerm: string): any[] {
    if (!values) {
      return [];
    }
    if (!searchTerm) {
      return values;
    }
    searchTerm = searchTerm.toLocaleLowerCase();
    return values.filter(it => it.merchant.name.toLocaleLowerCase().includes(searchTerm));
  }

}
