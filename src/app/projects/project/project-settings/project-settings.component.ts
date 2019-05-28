import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.styl']
})
export class ProjectSettingsComponent implements OnInit {

  @Input() data: any;
  @Input() projectId: number;
  @Output() closeChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}
  
  save(){
    this.closeChange.emit(this.data);
  }
  
  close(){
    this.closeChange.emit(null);
  }

}
