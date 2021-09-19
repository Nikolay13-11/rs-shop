import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGoods } from 'src/app/core/models/goods.model';
import { IUser } from 'src/app/core/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'http://localhost:3004/';


  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}categories`)
  }

  fetchUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}users`)
  }

  fetchGoods(): Observable<IGoods[]> {
    return this.http.get<IGoods[]>(`${this.baseUrl}goods`)
  }

  searchItems(value:string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}goods/search`, {
      params: new HttpParams().set('text', value)
    })
  }

  fetchGoodItem(id:string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}goods/item/${id}`, {
    })
  }
  fetchGoodItemByCategory(catId:string,subCatId:string, start?:number, count?:number):Observable<any> {
    let params = new HttpParams()
    params = params.append('start', `${start}`)
    params = params.append('count', `${count}`)
    return this.http.get<any>(`${this.baseUrl}goods/category/${catId}/${subCatId}`, {
      params
    })
  }



}
