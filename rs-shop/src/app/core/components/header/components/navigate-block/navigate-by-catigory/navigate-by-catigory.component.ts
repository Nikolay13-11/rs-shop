import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFromHttpService } from 'src/app/main/services/data-from-http.service';

@Component({
  selector: 'app-navigate-by-catigory',
  templateUrl: './navigate-by-catigory.component.html',
  styleUrls: ['./navigate-by-catigory.component.scss']
})
export class NavigateByCatigoryComponent implements OnInit{
categories$?: Observable<any>;

constructor(private dataService: DataFromHttpService) {

}

updateMainCategories() {
  this.categories$ = this.dataService.sharedCategories;
}

ngOnInit() {
  this.updateMainCategories()
}

}
