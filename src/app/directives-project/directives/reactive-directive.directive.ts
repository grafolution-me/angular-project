import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appReactiveDirective]'
})
export class ReactiveDirectiveDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'green';
  @HostBinding('style.backgroundColor') backgroundColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') onMouseEnter() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
     this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');
     this.backgroundColor = this.defaultColor;
  }

}
