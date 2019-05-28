import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BuilderRoutingModule } from './builder-routing.module';

import { DefaultPanelComponent } from './parts/dashboard/default-panel/default-panel.component';

import { SectionComponent } from './section/section.component';

import { S1Component } from './parts/sections/s1/s1.component';
import { S2Component } from './parts/sections/s2/s2.component';
import { S3Component } from './parts/sections/s3/s3.component';
import { S4Component } from './parts/sections/s4/s4.component';
import { S5Component } from './parts/sections/s5/s5.component';
import { S6Component } from './parts/sections/s6/s6.component';
import { S7Component } from './parts/sections/s7/s7.component';

import { SectionDirective } from './section.directive';
import { DataEditorDirective } from './parts/data-editor/data-editor.directive';
import { ParamsEditorDirective } from './parts/params-editor/params-editor.directive';

import { DataEditorComponent } from './parts/data-editor/data-editor.component';
import { ParamsEditorComponent } from './parts/params-editor/params-editor.component';

import { S1DataEditorComponent } from './parts/sections/s1/data-editor/data-editor.component';
import { S1ParamsEditorComponent } from './parts/sections/s1/params-editor/params-editor.component';

import { S2DataEditorComponent } from './parts/sections/s2/data-editor/data-editor.component';
import { S2ParamsEditorComponent } from './parts/sections/s2/params-editor/params-editor.component';

import { S3DataEditorComponent } from './parts/sections/s3/data-editor/data-editor.component';
import { S3ParamsEditorComponent } from './parts/sections/s3/params-editor/params-editor.component';

import { S4DataEditorComponent } from './parts/sections/s4/data-editor/data-editor.component';
import { S4ParamsEditorComponent } from './parts/sections/s4/params-editor/params-editor.component';

import { S5DataEditorComponent } from './parts/sections/s5/data-editor/data-editor.component';
import { S5ParamsEditorComponent } from './parts/sections/s5/params-editor/params-editor.component';

import { S6DataEditorComponent } from './parts/sections/s6/data-editor/data-editor.component';
import { S6ParamsEditorComponent } from './parts/sections/s6/params-editor/params-editor.component';

import { S7DataEditorComponent } from './parts/sections/s7/data-editor/data-editor.component';
import { S7ParamsEditorComponent } from './parts/sections/s7/params-editor/params-editor.component';

import { BlockPanelComponent } from './parts/block-panel/block-panel.component';

import { ProjectSettingsComponent } from '../projects/project/project-settings/project-settings.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BuilderRoutingModule,
    FormsModule
  ],
  declarations: [
    DefaultPanelComponent,
    SectionComponent,
    
    S1Component,
    S2Component,
    S3Component,
    S4Component,
    S5Component,
    S6Component,
    S7Component,
    
    SectionDirective,
    DataEditorDirective,
    ParamsEditorDirective,
    
    DataEditorComponent,
    ParamsEditorComponent,
    BlockPanelComponent,
    
    S1DataEditorComponent,
    S2DataEditorComponent,
    S3DataEditorComponent,
    S4DataEditorComponent,
    S5DataEditorComponent,
    S6DataEditorComponent,
    S7DataEditorComponent,
    
    S1ParamsEditorComponent,
    S2ParamsEditorComponent,
    S3ParamsEditorComponent,
    S4ParamsEditorComponent,
    S5ParamsEditorComponent,
    S6ParamsEditorComponent,
    S7ParamsEditorComponent
    
    
  ],
  entryComponents: [
    S1Component,
    S2Component,
    S3Component,
    S4Component,
    S5Component,
    S6Component,
    S7Component,
    
    DataEditorComponent,
    ParamsEditorComponent,
    BlockPanelComponent,
    
    S1DataEditorComponent,
    S2DataEditorComponent,
    S3DataEditorComponent,
    S4DataEditorComponent,
    S5DataEditorComponent,
    S6DataEditorComponent,
    S7DataEditorComponent,
    
    S1ParamsEditorComponent,
    S2ParamsEditorComponent,
    S3ParamsEditorComponent,
    S4ParamsEditorComponent,
    S5ParamsEditorComponent,
    S6ParamsEditorComponent,
    S7ParamsEditorComponent
    
  ],
  exports: [
    DefaultPanelComponent,
    SectionComponent,
    
    S1Component,
    S2Component,
    S3Component,
    S4Component,
    S5Component,
    S6Component,
    S7Component,
    
    BlockPanelComponent
  ]
})
export class BuilderModule { }
 