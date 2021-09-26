import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { DataFromHttpService } from '../../services/data-from-http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit, OnDestroy{
  cat?:any;
  subCat?:any;
  router:ActivatedRoute;
  item$?: Observable<any>
  sub: Subscription | undefined;

  constructor(private dataService:DataFromHttpService, router:ActivatedRoute) {
    this.router = router
  }

  updateItem() {
    const  { goodId, categoriesId, categoryId }  = this.router.snapshot.params;
    this.cat = this.dataService.getCatName(categoriesId)[0];
    this.subCat = this.dataService.getCatName(categoriesId, categoryId)[1];
    this.dataService.nextGoodsItem(goodId)
    this.item$ = this.dataService.sharedGoodsItem
  }

  addFavorite() {
    this.sub = this.item$?.subscribe(i =>
      this.dataService.nextFavoriteList(i.id)
      )
    // this.dataService.nextFavoriteList(id)
  }

  ngOnInit() {
  this.updateItem()
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

}
