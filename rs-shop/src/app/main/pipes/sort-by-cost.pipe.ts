import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByCost'
})
export class SortByCostPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
