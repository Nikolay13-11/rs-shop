import { Directive, ElementRef, Renderer2 } from '@angular/core';

import { DataFromHttpService } from '../services/data-from-http.service';

@Directive({
  selector: '[appChangeFavoriteState]'
})
export class ChangeFavoriteStateDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef,
    private dataService: DataFromHttpService
    ) { }

  // @Input() public availableAmount!: number;


  changeColor() {
    let i:any;
    this.dataService.sharedFavoriteList.subscribe(
      item => i = item
    )
    console.log(i)
  }

  ngOnInit():void {

    this.changeColor()
  }

}
