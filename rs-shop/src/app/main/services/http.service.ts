import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategories } from 'src/app/core/models/categories.model';
import { IGoods } from 'src/app/core/models/goods.model';
import { IUser } from 'src/app/core/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:3004/';

  constructor(private http: HttpClient) { }

  fetchCategoties(): Observable<Icategories> {
    return this.http.get<Icategories>(`${this.baseUrl}categories`)
  }

  fetchUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}users`)
  }

  fetchGoods(): Observable<IGoods> {
    return this.http.get<IGoods>(`${this.baseUrl}goods`)
  }
}
