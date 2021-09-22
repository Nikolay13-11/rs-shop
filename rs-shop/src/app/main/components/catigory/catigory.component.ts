import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { DataFromHttpService } from '../../services/data-from-http.service';

@Component({
  selector: 'app-catigory',
  templateUrl: './catigory.component.html',
  styleUrls: ['./catigory.component.scss']
})
export class CatigoryComponent implements OnInit{

  goodsByCatigory$?: Observable<any>
  // subCategoryById$?: Observable<any>
  subCategory:string = ''

  constructor(
    private dataService: DataFromHttpService,
    private activeRoute:ActivatedRoute,
    private router:Router
  ) { }

  updateCategory() {
    const  { categoriesId, categoryId }  = this.activeRoute.snapshot.params;
    this.subCategory = categoryId;

    this.dataService.nextGoodsByCategory(categoriesId, categoryId)
    this.goodsByCatigory$ = this.dataService.sharedGoodsByCategory
    console.log(this.dataService.sharedSubCategories)
    // this.categoryById$ = this.dataService.sharedCategoryById
    // this.subCategoryById$ = this.dataService.sharedSubCategoryById
  }

  navigate(id:string) {
    const  { categoriesId, categoryId }  = this.activeRoute.snapshot.params;
    this.router.navigate([`/${categoriesId}/${categoryId}/${id}`])
  }

  ngOnInit() {
    this.updateCategory()
  }

}
