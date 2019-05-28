import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Section } from './section';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id: number = 0;
  
  sections: Section[] = [];
  initState: boolean = false;
  
  sectionUpdate$ = new Subject<Section>();
  
  constructor(private http: HttpClient) { 
    setTimeout(() => {
      //this.sections.push(new Section(S1Component, {title: "rreee", subtitle: "HIIIIIII"}));
      //this.searchText$.next([new Section(S1Component, {title: "rreee", subtitle: "HIIIIIII"})]);
      //console.log(1122);
      }, 5000);
  }
  
  getSections(): Observable<Section[]> {
    setTimeout(() => {

    this.http.get('assets/data.json')
      .subscribe(
        data => {
          this.initState = true;
         
          
          Object.keys(data).map((key, index) => {
              let r = data[key];
              this.id++;
              
              this.sections.push( new Section(this.id, r['component'], r['data'], r['params']) );
              
              
          });
        }
      )
    }, 1000);
      
    return of(this.sections);
  }
    
  getSection(id){
    
    
  }
  
  addSection(params, indexPush){
    
    this.http.get('assets/'+params.component+'.json')
      .subscribe(
        data => {
  
          Object.keys(data).map((key, index) => {
              let
                indexComponent = indexPush+1,
                r = data[key],
                component = new Section(this.id, r['component'], r['data'], r['params'])
              ;
              
              this.id++;
              
              if(indexPush == -1)
                this.sections.push(component);
              else
                this.sections.splice(indexComponent, 0, component);
              
          });
        }
      );
  }
  
  sortSection(index, direction){
    let
      item = this.sections.splice(index, 1),
      newIndex = (index + direction) < 0 ? 0 : index + direction
    ;
        
    this.sections.splice(newIndex, 0, item[0]);
  }
  
  
  deleteSection(index){
    this.sections.splice(index, 1);
  }
  
  save(index, where, item){
    console.log(this.sections[index][where]);
    console.log(item);
    
    this.sections[index][where] = item;
    this.sectionUpdate$.next(this.sections[index]);
    
  }
}
