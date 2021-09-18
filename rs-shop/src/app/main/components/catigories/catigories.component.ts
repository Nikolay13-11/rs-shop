import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private router:ActivatedRoute
    ) { }

  updateCategories() {
    const  { categoriesId }  = this.router.snapshot.params;
    this.cat = categoriesId
    this.dateService.nextCategoryById(categoriesId)
    this.subCategories$ = this.dateService.sharedSubCategoryById
    console.log(this.subCategories$)
  }

  ngOnInit() {
    this.updateCategories()
  }

}
