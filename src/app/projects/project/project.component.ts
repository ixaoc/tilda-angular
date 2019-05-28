import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SiteService } from '../site.service';
import { PageService } from './page.service';

import { ProjectSettingsComponent} from './project-settings/project-settings.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})
export class ProjectComponent implements OnInit {

  projectId: number;
  
  popup = false;
  popupData;
  popupLayout = ProjectSettingsComponent;
  popupParams = null;
  
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
  }
  
  open(site, page){

    this.popup = true;
    
    document.getElementsByTagName('body')[0].classList.add('is-hidden');
    this.popupData = this.pageService.data[site][page];
    this.popupParams = {'id': site, 'page': page};
  
  }
  
  close(data){ 
    
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
