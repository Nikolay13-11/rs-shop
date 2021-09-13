import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFromHttpService } from 'src/app/main/services/data-from-http.service';

@Component({
  selector: 'app-navigate-block',
  templateUrl: './navigate-block.component.html',
  styleUrls: ['./navigate-block.component.scss']
})
export class NavigateBlockComponent implements OnInit{

  value:string = 'Clear me';
  mainCategories$?: Observable<any>;
  subCategories$?: Observable<any[]>;

constructor(private dataService: DataFromHttpService) {

}

updateMainCategories() {
  this.mainCategories$ = this.dataService.sharedCategories;
}

testLog(option:any) {

}

ngOnInit() {
  this.updateMainCategories()
}

}
