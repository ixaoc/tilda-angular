import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s4-params-editor',
  templateUrl: './params-editor.component.html',
  styleUrls: ['./params-editor.component.styl']
})
export class S4ParamsEditorComponent implements OnInit {
  
  @Input() data: any;

  constructor() { }

  ngOnInit() {
   
  }
  
}
