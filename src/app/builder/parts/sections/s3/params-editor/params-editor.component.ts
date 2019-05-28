import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s3-params-editor',
  templateUrl: './params-editor.component.html',
  styleUrls: ['./params-editor.component.styl']
})
export class S3ParamsEditorComponent implements OnInit {
  
  @Input() data: any;

  constructor() { }

  ngOnInit() {
   
  }
  
}
