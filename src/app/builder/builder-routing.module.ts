import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from '../layout/app-layout/app-layout.component';

import { BuilderComponent } from './builder.component';

const routes: Routes = [
  { 
      path: '', 
      component: AppLayoutComponent,
      children: [
        { path: 'builder/:id/:page', component: BuilderComponent }
      ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
