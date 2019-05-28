import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';

import { PopupMainDirective } from './popup-main.directive';

@Component({
  selector: 'app-popup-main',
  templateUrl: './popup-main.component.html',
  styleUrls: ['./popup-main.component.styl']
})
export class PopupMainComponent implements OnInit {
  
  @Input() layout;
  @Input() data;
  @Input() projectId;
  
  @Output() statusChange = new EventEmitter();
  
  @ViewChild(PopupMainDirective) puHost: PopupMainDirective;
    
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //let data = cloneDeep(this.data);
    console.log(this.data);
      
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.layout);
    
    let viewContainerRef = this.puHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    
    (<any>componentRef.instance).projectId = this.projectId;
    (<any>componentRef.instance).data = cloneDeep(this.data);
    (<any>componentRef.instance).closeChange.subscribe(data => { this.close(data); });
  }
  
  close(data){
    this.statusChange.emit(data);
  }

}
