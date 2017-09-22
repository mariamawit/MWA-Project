import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
@Input("appMyvisibility") visible : boolean;
  constructor(private e1: ElementRef) { }

  ngOnInit(){
    this.e1.nativeElement.style.display = "none";

    if(this.visible){
      this.e1.nativeElement.style.display = "block";
    }
  }

}
