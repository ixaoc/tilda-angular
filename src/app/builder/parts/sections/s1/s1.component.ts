import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { S1DataEditorComponent } from './data-editor/data-editor.component';
import { S1ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.styl']
})

export class S1Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S1DataEditorComponent,
    "params": S1ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}