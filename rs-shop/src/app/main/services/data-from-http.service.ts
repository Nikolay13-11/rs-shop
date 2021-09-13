import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icategory } from 'src/app/core/models/categories.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataFromHttpService {

  constructor(private http: HttpService) {}

  private category = new BehaviorSubject<Icategory[]>([])
  private categories = new BehaviorSubject<any[]>([])
  private subCategories = new BehaviorSubject<any[]>([])
  private goods = new BehaviorSubject<any[]>([])

  sharedCategory = this.category.asObservable()
  sharedCategories = this.categories.asObservable()
  sharedSubCategories = this.subCategories.asObservable()
  sharedGoods = this.goods.asObservable()


  nextCategory(input:any) {
    console.log(input);
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
  }

  nextSubCategories(value:any) {
    let arr:any[] = [];
    value.forEach((cat:any) =>
      cat.subCategories.forEach((subCat:any) => arr.push(subCat))
    )
  }
}
