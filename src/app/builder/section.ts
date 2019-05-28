import { Type } from '@angular/core';

export class Section {
  constructor(
    public id: number,
    public component: string,
    public data: any,
    public params: any
  ) {}
}