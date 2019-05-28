import { Component, OnInit, Input, Output } from '@angular/core';

import { S3DataEditorComponent } from './data-editor/data-editor.component';
import { S3ParamsEditorComponent } from './params-editor/params-editor.component';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.styl']
})
export class S3Component implements OnInit {
  
  @Input() index: number;
  @Input() data: any;
  @Input() params: any;
  
  editorsComponent = {
    "data": S3DataEditorComponent,
    "params": S3ParamsEditorComponent
  };
  
  constructor() { }

  ngOnInit() { }
  
}
