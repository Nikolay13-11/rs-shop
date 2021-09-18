import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InputSearchService } from 'src/app/core/services/input-search.service';
import { DataFromHttpService } from 'src/app/main/services/data-from-http.service';
import { HttpService } from 'src/app/main/services/http.service';

@Component({
  selector: 'app-navigate-block',
  templateUrl: './navigate-block.component.html',
  styleUrls: ['./navigate-block.component.scss']
})
export class NavigateBlockComponent implements OnInit {

  value: string = '';
  mainCategories$?: Observable<any>;
  subCategories$?: Observable<any[]>;
  searchResult$?: Observable<any[]>;


  constructor(
    private dataService: DataFromHttpService,
    private inputService: InputSearchService,
    private http: HttpService,
    private router: Router
    ) {

  }

  updateMainCategories() {
    this.mainCategories$ = this.dataService.sharedCategories;
  }

  testLog(option: any) {
    this.dataService.updateSubCategory(option)
    this.subCategories$ = this.dataService.sharedSubCategories;
  }

  updateSearchList() {
    this.searchResult$ = this.dataService.sharedSearchResult
  }

  ngOnInit() {
    this.updateSearchList()
    this.updateMainCategories()
  }

  test() {
    this.inputService.nextInputSearch('')
  }

  clickLink(inputId?:string, inputCat?:string) {
    this.inputService.nextInputSearch('')
  }

  updateSearchValue(event: any) {
    this.inputService.nextInputSearch(event)
  }

}
