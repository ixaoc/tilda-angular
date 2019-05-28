import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProjectsModule } from './projects/projects.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanComponent } from './plan/plan.component';
import { NewProjectComponent } from './new-project/new-project.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainLayoutModule } from './layout/main-layout/main-layout.module';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppLayoutModule } from './layout/app-layout/app-layout.module';
import { BuilderComponent } from './builder/builder.component';
import { BuilderModule } from './builder/builder.module';
import { BlockComponent } from './block/block.component';

import { PopupMainComponent } from './popup/popup-main/popup-main.component';
import { PopupMainDirective } from './popup/popup-main/popup-main.directive';


@NgModule({
  imports: [
    BrowserModule,
    ProjectsModule,
    BuilderModule,
    AppRoutingModule,
    MainLayoutModule,
    AppLayoutModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PlanComponent,
    NewProjectComponent,
    
    MainLayoutComponent,
    AppLayoutComponent,
    BuilderComponent,
    BlockComponent,
    
  ],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
