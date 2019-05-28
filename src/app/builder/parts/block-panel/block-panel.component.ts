import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-block-panel',
  templateUrl: './block-panel.component.html',
  styleUrls: ['./block-panel.component.styl']
})
export class BlockPanelComponent implements OnInit {
  @Output() addRequest = new EventEmitter();
  @Output() allBlocksRequest = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addNewItem(component) {
    this.addRequest.emit({component: component});
  }
  
  onCancel(){
    this.allBlocksRequest.emit({"state": false, "index": -1});
  }
}
