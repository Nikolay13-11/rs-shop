import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {

private inputSearch = new BehaviorSubject('')

sharedInputSearch = this.inputSearch.asObservable();

nextInputSearch(value:string) {
  console.log(value)
  this.inputSearch.next(value)
}
}
