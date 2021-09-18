import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFromHttpService } from '../../services/data-from-http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  router:ActivatedRoute;
  item$?: Observable<any>

  constructor(private dataService:DataFromHttpService, router:ActivatedRoute) {
    this.router = router
  }

  updateItem() {
    this.item$ = this.dataService.sharedGoodsItem
    const  { categoryId }  = this.router.snapshot.params;
    console.log(categoryId)
  }

ngOnInit() {

  this.dataService.nextGoodsItem('612e05c53fe9dca845d677fc')
  this.updateItem()
}
}
