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
  constructor(private http:HttpService, private dataService:DataFromHttpService) {}

  getGoodsForSlider() {
    this.http.fetchCategories().subscribe( i =>
      this.dataService.nextcategories(i)
      // pipe(
      //   map(i => this.dataService.nextcategories(i))
      // )
    )
    this.goodsForSlider$ = this.dataService.sharedCategory
    this.categories$ = this.dataService.sharedCategories
  }

  ngOnInit() {
    this.getGoodsForSlider()
    console.log(this.goodsForSlider$);
    console.log(this.categories$);
  }

}
