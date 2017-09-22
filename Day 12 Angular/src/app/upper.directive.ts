import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e1: ElementRef) { 
    e1.nativeElement.style.textTransform = "uppercase";
  }

}
