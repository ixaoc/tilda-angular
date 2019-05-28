import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { PlanComponent } from './plan/plan.component';

//import { NewProjectComponent } from './new-project/new-project.component';

const appRoutes: Routes = [  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
