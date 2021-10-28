import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositiveNumbers]'
})

export class PositiveNumbersDirective {
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    event.key.match(/^[0-9]$/) === null ? event.preventDefault() : ''
  }
}
