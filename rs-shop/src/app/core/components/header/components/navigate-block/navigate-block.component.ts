import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InputSearchService } from 'src/app/core/services/input-search.service';
import { DataFromHttpService } from 'src/app/main/services/data-from-http.service';
import { HttpService } from 'src/app/main/services/http.service';

@Component({
  selector: 'app-navigate-block',
  templateUrl: './navigate-block.component.html',
  styleUrls: ['./navigate-block.component.scss']
})
export class NavigateBlockComponent implements OnInit, OnDestroy{

  value: string = '';
  mainCategories$?: Observable<any>;
  subCategories$?: Observable<any[]>;
  catById:string = '';
  searchResult$?: Observable<any[]>;
  public searchValue = new Subject<any>();
  sub: Subscription;


  constructor(
    private dataService: DataFromHttpService,
    private inputService: InputSearchService,
    private http: HttpService,
    private router: Router
    ) {
      this.sub = this.searchValue.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe(val => {
        this.inputService.nextInputSearch(val)
      })

  }

  updateMainCategories() {
    this.mainCategories$ = this.dataService.sharedCategories;
  }

  updateSubCategoryById(id:string) {
    this.dataService.nextCategoryById(id);
    this.subCategories$ = this.dataService.sharedSubCategoryById
    this.catById = id
  }

  updateSearchList() {
    this.searchResult$ = this.dataService.sharedSearchResult
  }

  ngOnInit() {
    this.updateSearchList()
    this.updateMainCategories()
  }

  test(cat:string = '', subCat:string = '') {
    this.dataService.nextGoodsByCategory(cat, subCat)
  }

  clickLink() {
    this.inputService.nextInputSearch('')
  }

  updateSearchValue(event: any) {
    this.searchValue.next(event);
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
