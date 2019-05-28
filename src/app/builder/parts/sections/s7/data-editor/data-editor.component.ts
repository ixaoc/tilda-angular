import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s7-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.styl']
})
export class S7DataEditorComponent implements OnInit {
  
  @Input() data: any;

  constructor() { }

  ngOnInit() {
   
  }
  
}
