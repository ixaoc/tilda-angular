import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[de-host]'
})
export class DataEditorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
