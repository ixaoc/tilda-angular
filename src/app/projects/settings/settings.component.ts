import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SiteService } from '../site.service';
import { PageService } from '../project//page.service';

import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.styl']
})
export class SettingsComponent implements OnInit {

  projectId: number;
  data;
  
  tabs = [
    'main',
    'fonts',
    'homepage',
    'domain',
    'analytics',
    'seo',
    'export',
    'forms',
    'payments',
    'layout'
  ];
  
  currentTab = 'main';
  saving = false;
  
  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private pageService: PageService
  ) { }

  ngOnInit() {
    
    this.route.paramMap
      .subscribe(
        params => {
          this.projectId = +params.get("id");
        });
        
    this.data = cloneDeep(this.siteService.data[this.projectId]);
    
  }
  
  clickMenu(tab){
    this.currentTab = tab;
  }
  
  save(){
  
    if(!this.saving){
      this.siteService.data[this.projectId] = cloneDeep(this.data);
      this.saving = true;
    
      setTimeout(() => { this.saving = false; }, 1000);
    }
    
  }

}
