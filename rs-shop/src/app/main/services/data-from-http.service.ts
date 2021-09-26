import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { IsubCategories } from 'src/app/core/models/categories.model';
import { IDetail, IGoodsItem } from 'src/app/core/models/goods.model';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataFromHttpService {

  constructor(private http: HttpService) { }

  private categories = new BehaviorSubject<any[]>([])
  private categoryById = new BehaviorSubject<any>(null)
  private subCategoryById = new BehaviorSubject<any>(null)
  private subCategories = new BehaviorSubject<string[]>([])
  private goods = new BehaviorSubject<any[]>([])
  private topRateGoods = new BehaviorSubject<IDetail[]>([])
  private allGoodsArray = new BehaviorSubject<IDetail[]>([])
  private goodsForSlider = new BehaviorSubject<IDetail[]>([])
  private searchResult = new BehaviorSubject<any[]>([])
  private goodsItem = new BehaviorSubject<IGoodsItem[]>([])
  private goodsByCategory = new BehaviorSubject<IsubCategories[]>([])
  private favoriteList = new BehaviorSubject<IGoodsItem[]>([])

  array:IGoodsItem[] = []


  sharedCategories = this.categories.asObservable()
  sharedSubCategories = this.subCategories.asObservable()
  sharedGoods = this.goods.asObservable()
  sharedTopRateGoods = this.topRateGoods.asObservable()
  sharedAllGoodsArray = this.allGoodsArray.asObservable()
  sharedGoodsForSlider = this.goodsForSlider.asObservable()
  sharedSearchResult = this.searchResult.asObservable()
  sharedGoodsItem = this.goodsItem.asObservable()
  sharedGoodsByCategory = this.goodsByCategory.asObservable()
  sharedCategoryById = this.categoryById.asObservable()
  sharedSubCategoryById = this.subCategoryById.asObservable()
  sharedFavoriteList = this.favoriteList.asObservable()



  nextcategories(value: any) {
    this.categories.next(value)
  }

  nextCategoryById(id: string) {
    this.categoryById.next(this.categories.value.find(item => item.id === id));
    this.subCategoryById.next(this.categoryById.value.subCategories);
  }

  nextGoods(value: any) {
    this.goods.next(value)
    this.nextAllGoodsArray()
    this.nextTopRateGoods()
    this.nextGoodsForSlider()
  }

  nextSubCategories(value: any) {
    let arr: any[] = [];
    value.forEach((cat: any) =>
      cat.subCategories.forEach((subCat: any) => arr.push(subCat))
    )
  }

  nextAllGoodsArray() {
    let a: any = (Object.entries(this.goods.value))
      .flat()
      .filter(i => typeof (i) != 'string')
      .map(i => Object.entries(i)
        .flat()
        .filter(i => typeof (i) != 'string'))
      .flat(2)
    this.allGoodsArray.next(a)
  }

  nextTopRateGoods() {
    let topRateItems = (this.allGoodsArray.value)
      .filter(i => i.rating == 5 && i.imageUrls[0])
    this.topRateGoods.next(topRateItems)
  }

  nextGoodsForSlider() {
    let coaf = this.allGoodsArray.value.length;
    let arr: number[] = [];
    let resultSliderArray: IDetail[] = []
    for (let i = 0; i <= 9; i++) {
      arr.push(Math.ceil(Math.random() * coaf))
    }
    arr.forEach(item => resultSliderArray.push(this.allGoodsArray.value[item]))
    this.goodsForSlider.next(resultSliderArray)
  }

  mainSerch(input: string) {
    if (input) {
      this.http.searchItems(input).subscribe(
        i => this.searchResult.next(i)
      )
    }
    else {
      this.searchResult.next([]);
    }
  }


  nextGoodsItem(id:string) {
    this.http.fetchGoodItem(id).subscribe(
      i => this.goodsItem.next(i)
    )
  }
  nextGoodsByCategory(cat:string, subCat:string) {
    this.http.fetchGoodItemByCategory(cat, subCat).subscribe(
      i => this.goodsByCategory.next(i)
    )
  }

  nextFavoriteList(id:string) {

    this.http.fetchGoodItem(id).subscribe(
      i => this.array.push(i)
    )
    this.favoriteList.next(this.array)
  }

  getCatName(id:string, subId?:string) {
    let catName = this.categories.value.find(i => i.id === id)
    let SubCutName:any[] = catName.subCategories;
    SubCutName = SubCutName.find(i => i.id === subId);
    return [catName, SubCutName]
  }

  // getSubCutName(id:string) {
  //   let catName = this.getCatName(id)
  //   return catName.name
  // }

}
