import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pe-host]'
})
export class ParamsEditorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
