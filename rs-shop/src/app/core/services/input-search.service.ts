import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataFromHttpService } from 'src/app/main/services/data-from-http.service';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {

  constructor(private dataService: DataFromHttpService) {}

private inputSearch = new BehaviorSubject('')

sharedInputSearch = this.inputSearch.asObservable();

nextInputSearch(value:string) {
this.dataService.mainSerch(value)
  console.log(value)
  this.inputSearch.next(value)
}
}
