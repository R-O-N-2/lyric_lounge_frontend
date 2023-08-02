import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  works: Work[] = [];
  genres: Genre[] = []
  
  constructor(private worksService: WorksService){}
  
  ngOnInit(): void {
    
   this.getWorks();
   this.getGenres();
  }

  getWorks() {
     this.worksService.getWorks().subscribe({
      next: response => this.works = response,
      error: error => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment')
      }
    })
  }

  getGenres() {

    this.worksService.getGenres().subscribe({
      next: response => this.genres = response,
      error: error => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment')
      }
    })
  }
}
