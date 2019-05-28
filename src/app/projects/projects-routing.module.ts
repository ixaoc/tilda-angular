import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { SettingsComponent } from './settings/settings.component';

const projectRoutes: Routes = [
  { 
      path: '', 
      component: MainLayoutComponent,
      children: [
        { path: 'projects', component: ProjectsComponent, data: { title: 'Список сайтов', animation: 'projects' } },
        { path: 'projects/:id', component: ProjectComponent, data:{ animation: 'project' } },
        { path: 'projects/:id/settings', component: SettingsComponent},
        { path: '', redirectTo: '/projects', pathMatch: 'full' },
      ]
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectsRoutingModule { }
