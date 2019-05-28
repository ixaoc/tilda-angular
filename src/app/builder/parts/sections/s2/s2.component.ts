import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { S2DataEditorComponent } from './data-editor/data-editor.component';
import { S2ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.styl']
})

export class S2Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S2DataEditorComponent,
    "params": S2ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}