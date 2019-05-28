import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, HostBinding } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';

import { DataEditorDirective } from './data-editor.directive';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.styl'],
  animations: [
    trigger('panelAnimations', [
      transition(':enter', [
        group([
          query('.data-editor', [
            style({ background: 'rgba(0,0,0,0)' }),
            animate('300ms ease', style({ background: 'rgba(0,0,0,0.3)' }))
          ]),
          query('.data-editor__inner', [
            style({ opacity: 0, transform: 'translateX(-100%)' }),
            animate('300ms ease', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ])
      ]),
      
      transition(':leave', [
        group([
          query('.data-editor', [
            style({ opacity: 1 }),
            animate('150ms ease', style({ opacity: 0 }))
          ])
          
        ])
      ])
    ]),
  ]
})
export class DataEditorComponent implements OnInit {
  @HostBinding('@panelAnimations')
  
  data;
  private _data;
  
  @Input() component;
  @Input('data')
  set inputData(obj){
    this._data = obj;
  }
  
  get outputData(){
    return this._data;
  }
  
  @Output() dataChange = new EventEmitter();
  @ViewChild(DataEditorDirective) deHost: DataEditorDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.data = cloneDeep(this._data);
      
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    
    let viewContainerRef = this.deHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).data = this.data;
  }
  
  onSave(){
    this.dataChange.emit({'status': 1, 'close': false, 'data': cloneDeep(this.data)});
  }
  
  onSaveClose(){
    this.dataChange.emit({'status': 1, 'close': true, 'data': cloneDeep(this.data)});
  }
  
  onCancel(){
    this.dataChange.emit({'status': 0});
  }

}
