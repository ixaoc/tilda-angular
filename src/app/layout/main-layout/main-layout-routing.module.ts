import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';

import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { PlanComponent } from '../../plan/plan.component';

import { NewProjectComponent } from '../../new-project/new-project.component';

const routes: Routes = [
  { 
      path: '', 
      component: MainLayoutComponent,
      children: [
        { path: 'plan', component: PlanComponent, data: { title: 'Тарифы', animation: 'tarif' } },
        
        { path: '**', component: PageNotFoundComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
