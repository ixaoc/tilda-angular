import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s2-params-editor',
  templateUrl: './params-editor.component.html',
  styleUrls: ['./params-editor.component.styl']
})
export class S2ParamsEditorComponent implements OnInit {
  
  @Input() data: any;

  constructor() { }

  ngOnInit() {
   
  }
  
}
