import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Site } from './site';


@Injectable({
  providedIn: 'root'
})
export class SiteService {
  
  data = {
    1: new Site('Тестовый сайт', 'Обзорный сайт для тестирования')
  };
}
