import { Component, OnInit, Input, Output } from '@angular/core';

import { S5DataEditorComponent } from './data-editor/data-editor.component';
import { S5ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s5',
  templateUrl: './s5.component.html',
  styleUrls: ['./s5.component.styl']
})
export class S5Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S5DataEditorComponent,
    "params": S5ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}
