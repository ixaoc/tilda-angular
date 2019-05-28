import { Component, OnInit, Input, Output } from '@angular/core';

import { S4DataEditorComponent } from './data-editor/data-editor.component';
import { S4ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s4',
  templateUrl: './s4.component.html',
  styleUrls: ['./s4.component.styl']
})
export class S4Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S4DataEditorComponent,
    "params": S4ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}
