import { Injectable } from '@angular/core';

import { S1Component } from './parts/sections/s1/s1.component';
import { S2Component } from './parts/sections/s2/s2.component';
import { S3Component } from './parts/sections/s3/s3.component';
import { S4Component } from './parts/sections/s4/s4.component';
import { S5Component } from './parts/sections/s5/s5.component';
import { S6Component } from './parts/sections/s6/s6.component';
import { S7Component } from './parts/sections/s7/s7.component';

const COMPONENTS = {
  S1Component: S1Component,
  S2Component: S2Component,
  S3Component: S3Component,
  S4Component: S4Component,
  S5Component: S5Component,
  S6Component: S6Component,
  S7Component: S7Component
};

export class TransformComponentService {

  constructor() { }
  
  getComponent(name){
    return COMPONENTS[name];
  }
}
