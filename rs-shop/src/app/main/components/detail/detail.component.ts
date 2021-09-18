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
    const  { goodId }  = this.router.snapshot.params;
    this.dataService.nextGoodsItem(goodId)
    this.item$ = this.dataService.sharedGoodsItem
  }

ngOnInit() {
  this.updateItem()
}
}
