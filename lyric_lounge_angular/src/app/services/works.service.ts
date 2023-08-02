import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work } from '../models/works.model';
import { Genre } from '../models/genre.model';

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

  getWorksByUsername(username: string) {
    return this.http.get<Work[]>(this.baseUrl + 'work/username' + username)
  }

  getGenres() {
    return this.http.get<Genre[]>(this.baseUrl + 'genres')
  }

  getGenreByName() { 
    return 
  }
}
