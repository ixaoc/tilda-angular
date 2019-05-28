import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s5-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.styl']
})
export class S5DataEditorComponent implements OnInit {
  
  @Input() data: any;

  constructor() { }

  ngOnInit() {
   
  }
  
}
