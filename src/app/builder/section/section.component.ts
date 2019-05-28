import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Section } from './../section';
import { SectionDirective } from './../section.directive';

import { DataService } from './../data.service';
import { TransformComponentService } from './../transform-component.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.styl'],
  providers: [TransformComponentService]
})
export class SectionComponent implements OnInit {

  @Input('index') indexItem: number;
  @Input('data') item: Section;
  @ViewChild(SectionDirective) sHost: SectionDirective;
  
  @Output() request = new EventEmitter();
  @Output() allBlocksRequest = new EventEmitter();
  
  componentRef;
  editorsComponent;
  
  reader = {
    "data": false,
    "params": false
  };
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private transformService: TransformComponentService,
    private dataService: DataService
  ) { }

  ngOnInit() {

    let component = this.transformService.getComponent(this.item.component);
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    
    let viewContainerRef = this.sHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.editorsComponent = this.componentRef.instance.editorsComponent;
    
    this.setData(this.item);
    
    this.dataService.sectionUpdate$
        .subscribe(r => {
          if(r.id === this.item.id){
            this.setData(r);
          }
        }); 
    
  }
  
  setData(item) {
    
    let instance = this.componentRef.instance;
    
    instance.index = this.indexItem;
    instance.data = item.data;
    instance.params = item.params;
  }
  
  openEditor(name){
    this.reader[name] = true;
    this.request.emit(true);
  }
  
  closeEditor(){
    this.request.emit(false);
  }
  
  saveData(type, result){
  
    let reader = false;
    
    if(result.status === 1){
    
      this.dataService.save(this.indexItem, type, result.data);
      //this.componentRef.instance[type] = result.data;
      
      reader = !result.close;
        
    } 
    
    this.reader[type] = reader;
    
    if(!reader)
      this.closeEditor();
    
  }
  
  
  onSaveData(result){
  
    this.saveData('data', result);
        
  }
  
  onSaveParams(result){
  
    this.saveData('params', result);
        
  }
  
  addByIndex(){
    this.allBlocksRequest.emit({"state": true, "index": this.indexItem});
  }
  
  upComponent(){
    this.dataService.sortSection(this.indexItem, -1);
  }
  
  downComponent(){
    this.dataService.sortSection(this.indexItem, 1);
  }
  
  deleteComponent(){
    this.dataService.deleteSection(this.indexItem);
  }
  
}
