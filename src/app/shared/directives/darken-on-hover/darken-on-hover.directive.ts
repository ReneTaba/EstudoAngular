import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brigtness = '70%'

  constructor(private el: ElementRef,
    private render: Renderer2){

  }

  @HostListener('mouseover')
  dakenOn(){
      this.render.setStyle(this.el.nativeElement,'filter',`brightness(${this.brigtness})`)
  }

  @HostListener('mouseleave')
  darkenOff(){
    this.render.setStyle(this.el.nativeElement,'filter','brightness(100%)')
  }
}
