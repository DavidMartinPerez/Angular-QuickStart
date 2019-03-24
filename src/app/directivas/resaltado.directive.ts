import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dirResaltado]'
})
export class ResaltadoDirective {

  @Input("color") color: string = 'white';
  @Input("bgcolor") bgcolor: string = 'black'

  constructor(
    private element:ElementRef
  ) {
    console.log("directiva llamadas")

    //element.nativeElement.style.backgroundColor = 'yellow';

  }

  @HostListener("mouseenter") mouseEnter(){
    this.resaltar( this.color, this.bgcolor )
  }

  @HostListener("mouseleave") mouseLeave(){
     this.resaltar()
  }

  private resaltar( color:string = null, bgcolor:string = null ) {

    this.element.nativeElement.style.backgroundColor = bgcolor;
    this.element.nativeElement.style.color = color;

  }

}
