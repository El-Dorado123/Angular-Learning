import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedel]',
  standalone: true
})
export class RedelDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color='red';
   }
}
