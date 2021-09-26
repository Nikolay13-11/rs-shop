import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPopularity'
})
export class SortByPopularityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
