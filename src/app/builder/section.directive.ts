import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[s-host]'
})
export class SectionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
