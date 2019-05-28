import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MainLayoutRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent, CommonModule]
})
export class MainLayoutModule { }
