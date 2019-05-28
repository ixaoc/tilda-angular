import { Component, OnInit } from '@angular/core';
import { SiteService } from './site.service';
import { Site } from './site';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-projects',
  
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.styl'],
  animations: [ slideInAnimation ]
})
export class ProjectsComponent implements OnInit {

  project: number;
  
  sites = {};
  sites$: Observable<object>;
  
  index$: Observable<any>;
  
  popup = false;
  
  //private projects: Project[] = [];
  private header: String = '';

  constructor(private siteService: SiteService, private route: ActivatedRoute) {  }

  ngOnInit() {
  
    //this.projects = this.service.getProjects();
    //this.data = this.route.data;
    
    this.route.data.subscribe(params => { this.header = params['header']; });
    
    
  }
  
  changePopup(){
    let bodyClassList = document.getElementsByTagName('body')[0].classList;
  
    this.popup = !this.popup;
    
    if(this.popup)
      bodyClassList.add('is-hidden');
    else
      bodyClassList.remove('is-hidden');
  }

}
