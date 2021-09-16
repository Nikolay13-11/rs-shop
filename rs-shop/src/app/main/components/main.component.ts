import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFromHttpService } from '../services/data-from-http.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  goodsForSlider$?: Observable<any>;
  categories$?: Observable<any>;
  goodsForPopularSlider$?: Observable<any>;
  currentRate = 6;
  array = []
  constructor(private http:HttpService, private dataService:DataFromHttpService) {}

  updateData() {
    this.http.fetchCategories().subscribe( i =>
      this.dataService.nextcategories(i)
    )
    this.http.fetchGoods().subscribe( i => this.dataService.nextGoods(i))
  }

  getGoodsForSlider() {
    this.goodsForSlider$ = this.dataService.sharedGoodsForSlider
    this.goodsForPopularSlider$ = this.dataService.sharedTopRateGoods
  }

  ngOnInit() {
    this.updateData();
    this.getGoodsForSlider()
  }

}
