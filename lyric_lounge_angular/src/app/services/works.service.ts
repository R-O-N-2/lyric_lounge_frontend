import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work } from '../models/works.model';
import { Genre } from '../models/genre.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  baseUrl = 'http://localhost:3001/'
  private works: Work[] =[]
  private worksUpdated = new Subject<Work[]>()

  constructor(private http: HttpClient) { 
    
  }

  getWorks() {
    return this.http.get<Work[]>(this.baseUrl + 'works');
  }

  addWorks(title:string, content:string, genre: string, user: string, id: string) {
    const work: Work = {title: title, content: content, genre: genre, user: user, id: id}
    this.http.post<Work>(this.baseUrl + 'works', work).subscribe((responseData) => {
      console.log(responseData);
      this.works.push(work);
      this.worksUpdated.next([...this])
    });
    
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
