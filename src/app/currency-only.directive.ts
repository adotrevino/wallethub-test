import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[CurrencyOnly]'
})
export class CurrencyOnlyDirective {
  public decimalRegex: RegExp = new RegExp(/^[0-9]*(\.[0-9]{0,2})?$/); 
  public exceptions:Array<string> = ['Backspace','ArrowLeft','ArrowRight'];
  constructor(private elementRef: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.exceptions.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
    if (inputValue && !String(inputValue).match(this.decimalRegex)) {
      event.preventDefault();
    }

    return;
  }
}
