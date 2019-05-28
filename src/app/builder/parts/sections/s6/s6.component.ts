import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { S6DataEditorComponent } from './data-editor/data-editor.component';
import { S6ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s6',
  templateUrl: './s6.component.html',
  styleUrls: ['./s6.component.styl']
})

export class S6Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S6DataEditorComponent,
    "params": S6ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}