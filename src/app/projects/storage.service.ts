import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Site } from './site';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  id: number = 0;
  
  sites: Site[] = [];
  //sections: Section[] = [];
  
  initState: boolean = false;
  
  //sectionUpdate$ = new Subject<Section>();
  
  constructor(private http: HttpClient) { }
  
  //getSections(data){
  //    return this.sections;
  //}
  
  getSites(): Observable<Site[]> {
    setTimeout(() => {

    this.http.get('assets/sites.json')
      .subscribe(
        data => {
          this.initState = true;
         
          
          Object.keys(data).map((key, index) => {
              let r = data[key];
              this.id++;
              
              this.sites[key] = new Site(r['content'], r['params']);
              
              
          });
          
          console.log(this.sites);
        }
      )
    }, 1000);
      
    return of(this.sites);
  }
}
