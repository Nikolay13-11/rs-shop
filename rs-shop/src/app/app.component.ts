import { Component, OnInit } from '@angular/core';

import { DataFromHttpService } from './main/services/data-from-http.service';
import { HttpService } from './main/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rs-shop';

  constructor(private http: HttpService, private dataService: DataFromHttpService) { }

  updateData() {
    this.http.fetchCategories().subscribe(i =>
      this.dataService.nextcategories(i)
    )
    this.http.fetchGoods().subscribe(i => this.dataService.nextGoods(i))
  }

  ngOnInit() {
    this.updateData()
  }
}
