import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.styl'],
  animations: [ slideInAnimation ]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  getAnimationData(outlet: RouterOutlet) { console.log(outlet.activatedRouteData);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
