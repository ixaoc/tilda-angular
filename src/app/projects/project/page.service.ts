import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Page } from './page';


@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  data = {
    1: {
      1: new Page('Тестовая страница')
    }
  };
}
