import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectSettingsComponent } from './project/project-settings/project-settings.component';

import { TryItComponent } from 'app/try-it/try-it.component';

import { ShareModule } from '../share.module';
import { SettingsComponent } from './settings/settings.component';

import { PopupMainComponent } from '../popup/popup-main/popup-main.component';
import { PopupMainDirective } from '../popup/popup-main/popup-main.directive';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ShareModule,
    FormsModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectSettingsComponent,
    TryItComponent,
    SettingsComponent,
    PopupMainComponent,
    PopupMainDirective
  ],
  entryComponents: [
    ProjectSettingsComponent
  ],
  exports: [
    PopupMainComponent,
    ProjectSettingsComponent
  ]
})
export class ProjectsModule { }
