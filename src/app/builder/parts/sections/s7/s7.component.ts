import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { S7DataEditorComponent } from './data-editor/data-editor.component';
import { S7ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s7',
  templateUrl: './s7.component.html',
  styleUrls: ['./s7.component.styl']
})

export class S7Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S7DataEditorComponent,
    "params": S7ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}