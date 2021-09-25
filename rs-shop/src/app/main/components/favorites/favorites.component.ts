import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DataFromHttpService } from '../../services/data-from-http.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  items$?: Observable<any>

  constructor(private dataService: DataFromHttpService) { }

  updateFavoriteItems() {
    this.items$ = this.dataService.sharedFavoriteList
  }

  ngOnInit() {
    this.updateFavoriteItems()
  }

}
