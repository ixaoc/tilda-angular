import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export class Project {
  constructor(public id: number, public title: string, public description: string) { }
}
 
const PROJECTS = [
  new Project(11, 'Design studio', 'First cool crazy design'),
  new Project(12, 'High scholl', ''),
  new Project(13, 'Dancer', ''),
];


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  
  getProjects() { return PROJECTS;  //return of(PROJECTS); 
  }
}
