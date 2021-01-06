import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  implements OnInit {

  constructor( private element: ElementRef ) {
    // element.nativeElement.style.backgroundColor = 'red';
  }

  @Input() backgroundColor = '';
  @Input() color = '';
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.color = this.color;
  }

}
