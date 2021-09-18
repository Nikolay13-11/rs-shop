import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFromHttpService } from '../../services/data-from-http.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent  implements OnInit{
  goodsForSlider$?: Observable<any>;
  categories$?: Observable<any>;
  goodsForPopularSlider$?: Observable<any>;
  currentRate = 6;
  array = [];
  b = 0
  a = new Array(12)
  constructor(private http: HttpService, private dataService: DataFromHttpService) { }

  updateData() {
    this.http.fetchCategories().subscribe(i =>
      this.dataService.nextcategories(i)
    )
    this.http.fetchGoods().subscribe(i => this.dataService.nextGoods(i))
  }

  getGoodsForSlider() {
    this.goodsForSlider$ = this.dataService.sharedGoodsForSlider
    this.goodsForPopularSlider$ = this.dataService.sharedTopRateGoods
    this.b = Object.entries(this.goodsForPopularSlider$)[1].length;
  }

  ngOnInit() {
    this.updateData();
    this.getGoodsForSlider()
  }


}
