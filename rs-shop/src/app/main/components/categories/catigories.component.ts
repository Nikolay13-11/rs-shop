import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { DataFromHttpService } from '../../services/data-from-http.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss'],
})
export class CatigoriesComponent  implements OnInit{
  subCategories$?: Observable<any>
  cat?:string;

  constructor(
    private dateService:DataFromHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  updateCategories() {
    const  { categoriesId }  = this.activatedRoute.snapshot.params;
    this.cat = categoriesId
    this.subCategories$ = this.dateService.sharedSubCategoryById
    console.log(this.subCategories$)
  }

  updateCat(cat:string = '', subCat:string = '') {
    this.dateService.nextGoodsByCategory(cat, subCat)
  }

  ngOnInit() {
    this.updateCategories()
  }

}
