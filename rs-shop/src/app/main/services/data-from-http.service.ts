import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icategory } from 'src/app/core/models/categories.model';
import { IDetail } from 'src/app/core/models/goods.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataFromHttpService {

  constructor(private http: HttpService) {}

  private category = new BehaviorSubject<Icategory[]>([])
  private categories = new BehaviorSubject<any[]>([])
  private subCategories = new BehaviorSubject<string[]>([])
  private goods = new BehaviorSubject<any[]>([])
  private topRateGoods = new BehaviorSubject<IDetail[]>([])
  private allGoodsArray = new BehaviorSubject<IDetail[]>([])
  private goodsForSlider = new BehaviorSubject<IDetail[]>([])
  private searchResult = new BehaviorSubject<any[]>([])

  sharedCategory = this.category.asObservable()
  sharedCategories = this.categories.asObservable()
  sharedSubCategories = this.subCategories.asObservable()
  sharedGoods = this.goods.asObservable()
  sharedTopRateGoods = this.topRateGoods.asObservable()
  sharedAllGoodsArray = this.allGoodsArray.asObservable()
  sharedGoodsForSlider = this.goodsForSlider.asObservable()
  sharedSearchResult = this.searchResult.asObservable()


  nextCategory(input:any) {
    this.category.next(input)
  }

  nextcategories(value: any) {
    let arr: any[] = []
    this.category.next(value)
    value.forEach((item: any) => arr.push(item.name))
    this.categories.next(arr)
  }
  nextGoods(value: any) {
    this.goods.next(value)
    this.nextAllGoodsArray()
    this.nextTopRateGoods()
    this.nextGoodsForSlider()
  }

  nextSubCategories(value:any) {
    let arr:any[] = [];
    value.forEach((cat:any) =>
      cat.subCategories.forEach((subCat:any) => arr.push(subCat))
    )
  }

  updateSubCategory(option?: string) {
    let k: string[] = [];
    this.category.value.find(item => item.name === option)?.subCategories.forEach(i => k.push(i.name));
    this.subCategories.next(k)
  }

  nextAllGoodsArray() {
    let a:any = (Object.entries(this.goods.value))
    .flat()
    .filter(i => typeof(i) != 'string')
    .map(i => Object.entries(i)
    .flat()
    .filter(i => typeof(i) != 'string'))
    .flat(2)
    this.allGoodsArray.next(a)
  }

  nextTopRateGoods() {
    let topRateItems = (this.allGoodsArray.value)
    .filter(i => i.rating == 5)
    this.topRateGoods.next(topRateItems)

    console.log((this.category.value).flat(4))
  }

  nextGoodsForSlider() {
    let coaf = this.allGoodsArray.value.length;
    let arr = [];
    let resultSliderArray:IDetail[] = []
    for(let i = 0; i <= 9; i++) {
      arr.push(Math.ceil(Math.random() * coaf))
    }
    arr.forEach(item => resultSliderArray.push(this.allGoodsArray.value[item]))
    this.goodsForSlider.next(resultSliderArray)
  }

  mainSerch(input:string) {
    let searchResultArray = [];
    searchResultArray.push(this.allGoodsArray.value.filter(item => item.name.toLowerCase().includes(input.toLowerCase())));
    this.searchResult.next(searchResultArray);
  }
}
