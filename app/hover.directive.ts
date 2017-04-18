import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
	selector:'[hover]',
	host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HoverDirective{
	
	 constructor(private element: ElementRef, private renderer: Renderer){
          
        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }
     
    onMouseEnter(){
        this.setTextShadow("0px 0px 13px rgba(255,255,255,0.7)");
    }
    onMouseLeave(){
        this.setTextShadow("0px 0px 0px");
    }
    private setTextShadow(val:any) {
        this.renderer.setElementStyle(this.element.nativeElement, "text-shadow", val);
    }
	
}