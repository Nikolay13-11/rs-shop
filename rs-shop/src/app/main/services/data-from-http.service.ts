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

  sharedCategory = this.category.asObservable()
  sharedCategories = this.categories.asObservable()


  nextCategory(input:any) {
    console.log(input);
    this.category.next(input)
  }

  nextcategories(value: any) {
    let arr: any[] = []
    value.forEach((item: any) => arr.push(item.name))
    console.log(value);
    this.categories.next(arr)
  }
}
