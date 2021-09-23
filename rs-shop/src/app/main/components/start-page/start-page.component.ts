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
  move?:string;
  activeIndex = 0
  count = 0;

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
  }

  ngOnInit() {
    this.updateData();
    this.getGoodsForSlider()
  }

  movePopularSlider(dir:string) {

    if (dir === 'right' && this.count > 0) {
      this.count--
        this.activeIndex = this.activeIndex + 885
        this.move = `translateX(${this.activeIndex}px)`
        console.log(this.move)

    }
    else if (dir === 'left' && this.count < 13) {
      this.count++
        this.activeIndex = this.activeIndex - 885
        this.move = `translateX(${this.activeIndex}px)`
        console.log(this.move)

    }
    console.log(this.count)
  }

}
