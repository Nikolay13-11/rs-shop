import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeAvailabilityState]'
})
export class ChangeAvailabilityStateDirective implements OnInit{

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @Input() public availableAmount!: number;


  changeColor() {
    if(this.availableAmount >= 20){
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#0dff00');
    }
    if(this.availableAmount >= 5 && this.availableAmount < 20){
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fbff00');
    }
    if(this.availableAmount < 5 && this.availableAmount > 0){
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#ff0000');
    }
  }

  ngOnInit():void {

    this.changeColor()
  }

}


