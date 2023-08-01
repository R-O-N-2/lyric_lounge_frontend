import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work } from '../models/works.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  baseUrl = 'http://localhost:3001/'


  constructor(private http: HttpClient) { 
    
  }

  getWorks() {
    return this.http.get<Work[]>(this.baseUrl + 'works');
  }
}
