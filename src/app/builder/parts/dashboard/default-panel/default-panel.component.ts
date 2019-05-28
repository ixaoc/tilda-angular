import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-panel',
  templateUrl: './default-panel.component.html',
  styleUrls: ['./default-panel.component.styl']
})
export class DefaultPanelComponent implements OnInit {
  @Output() addRequest = new EventEmitter();
  @Output() allBlocksRequest = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addNewItem(component) {
    this.addRequest.emit({component: component});
  }
  
  openBlocksPanel() {
    this.allBlocksRequest.emit({"state": true, "index": -1});
  }
}
