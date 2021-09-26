import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { DataFromHttpService } from 'src/app/main/services/data-from-http.service';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {
  countLetters = 2;
  constructor(private dataService: DataFromHttpService) {}

private inputSearch = new BehaviorSubject('')

sharedInputSearch = this.inputSearch.asObservable();

nextInputSearch(value:string) {
  if (value.length > 2) {
    this.dataService.mainSerch(value)
  this.inputSearch.next(value)
  }
  else {
    this.dataService.mainSerch('')
    this.inputSearch.next('')
  }
}
}
