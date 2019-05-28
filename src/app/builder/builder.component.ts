import { Observable, of } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SiteService } from '../projects/site.service';
import { PageService } from '../projects/project/page.service';

import { DataService } from './data.service';
import { Section } from './section';

import { ProjectSettingsComponent} from '../projects/project/project-settings/project-settings.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.styl']
})
export class BuilderComponent implements OnInit {

  project: number;
  page: number;
  
  sections: Section[] = [];
  sections$: Observable<Section[]>;
  
  indexPushSection = -1;
  hide: boolean = false;
  headerShow = true;
  blocksShow = false;
  
  index$: Observable<any>;
  
  popup = false;
  popupData;
  popupLayout = ProjectSettingsComponent;
  popupParams = null;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private siteService: SiteService,
    private pageService: PageService
  ) { }

  ngOnInit() {
    
    this.route.paramMap
      .subscribe(
        params => {
          this.project = +params.get("id");
          this.page = +params.get("page");
          
          
          this.dataService.getSections()
            .subscribe(
              result => {
                
                this.sections = result;
              }
            ); 
        }
      );
  }
  
  trackBySections(index: number, section: Section): number { return section.id; }
  
  onState(data){
    this.headerShow = !data;
  }
  
  openBlocksPanel(data){
    this.blocksShow = data.state;
    this.indexPushSection = data.index;
  }
  
  addBlock(params){ console.log(this.indexPushSection);
    this.dataService.addSection(params, this.indexPushSection);
    this.blocksShow = false;
    this.indexPushSection = -1;
  }
  
  openSettings(site, page){
    
    this.popup = true;
    
    document.getElementsByTagName('body')[0].classList.add('is-hidden');
    this.popupData = this.pageService.data[site][page];
    this.popupParams = {'id': site, 'page': page};
    
  }
  
  closeSettings(data){ 
   
    if(data !== null){
      let
        site = this.popupParams['id'],
        page = this.popupParams['page']
      ;
      
      this.pageService.data[site][page] = data;
      
    }
    
    this.popup = false;
    
    document.getElementsByTagName('body')[0].classList.remove('is-hidden');
    this.popupData = null;
    this.popupParams = null;
  }

}
