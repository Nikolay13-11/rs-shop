import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDetail, IGoodsItem } from 'src/app/core/models/goods.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataFromHttpService {

  constructor(private http: HttpService) { }

  private category = new BehaviorSubject<any[]>([])
  private categories = new BehaviorSubject<any[]>([])
  private subCategories = new BehaviorSubject<string[]>([])
  private goods = new BehaviorSubject<any[]>([])
  private topRateGoods = new BehaviorSubject<IDetail[]>([])
  private allGoodsArray = new BehaviorSubject<IDetail[]>([])
  private goodsForSlider = new BehaviorSubject<IDetail[]>([])
  private searchResult = new BehaviorSubject<any[]>([])
  private allSubCategory = new BehaviorSubject<any[]>([])
  private goodsItem = new BehaviorSubject<IGoodsItem[]>([])

  sharedCategory = this.category.asObservable()
  sharedCategories = this.categories.asObservable()
  sharedSubCategories = this.subCategories.asObservable()
  sharedGoods = this.goods.asObservable()
  sharedTopRateGoods = this.topRateGoods.asObservable()
  sharedAllGoodsArray = this.allGoodsArray.asObservable()
  sharedGoodsForSlider = this.goodsForSlider.asObservable()
  sharedSearchResult = this.searchResult.asObservable()
  sharedAllSubCategory = this.allSubCategory.asObservable()
  sharedGoodsItem = this.goodsItem.asObservable()


  nextCategory(input: any) {
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

  nextSubCategories(value: any) {
    let arr: any[] = [];
    value.forEach((cat: any) =>
      cat.subCategories.forEach((subCat: any) => arr.push(subCat))
    )
  }

  updateSubCategory(option?: string) {
    let k: string[] = [];
    this.category.value.find(item => item.name === option)?.subCategories.forEach((i: any) => k.push(i.name));
    this.subCategories.next(k)
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
    // let searchResultArray = [];
    if (input) {
      this.http.searchItems(input).subscribe(
        i => this.searchResult.next(i)
      )
    }
    else {
      this.searchResult.next([]);
    }
    // console.log(searchResultArray)
    // this.searchResult.next(searchResultArray);
  }

  nextAllSubCategory(input: string) {
    let a: any = Object.entries(this.category.value.map(i => i.subCategories).flat())
      .forEach(i => i.filter(i => typeof (i) != 'string')
        .filter(item => item.name.toLowerCase().includes(input.toLowerCase())))
    console.log(a)
    return a
  }

  nextGoodsItem(id:string) {
    this.http.fetchGoodItem(id).subscribe(
      i => this.goodsItem.next(i)
    )
  }
}
