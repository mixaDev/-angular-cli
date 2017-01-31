import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlag]'
})
export class FlagDirective {

  @Input() appFlag;
  @Output() appFlagChange = new EventEmitter();

  constructor(private el: ElementRef) {
  }
  @HostListener('click') onClick() {
    this.appFlag = !this.appFlag;
    this.appFlagChange.emit(this.appFlag);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
