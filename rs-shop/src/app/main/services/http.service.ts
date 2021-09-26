import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

  getIpAddress() {
    return this.http
          .get('https://api.ipify.org/?format=json')
          .pipe(
            catchError(this.handleError)
          );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  fetchLocation():Observable<any> {
    return this.http.get<any>(`https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=4517447e48394cf288df47699bc28c0f`)
  }


}
