import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pu-host]'
})
export class PopupMainDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
