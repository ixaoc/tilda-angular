import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjKeysPipe } from './obj-keys.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ObjKeysPipe],
  exports: [ObjKeysPipe]
})
export class ShareModule { }
