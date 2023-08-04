import { Component } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  works: Work[] = [];
  genres: Genre[] = [
    // { genreName: 'pop' },
    // { genreName: 'hiphop' },
    // { genreName: 'jazz' },
    // { genreName: 'other' },
  ];

  constructor(private worksService: WorksService) {}

  ngOnInit(): void {
    this.getWorks();
    this.getGenres();
  }

  getWorks() {
    this.worksService.getWorks().subscribe({
      next: (response) => (this.works = response),
      error: (error) => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment');
      },
    });
  }

  getGenres() {
    this.worksService.getGenres().subscribe({
      next: (response) => (this.genres = response),
      error: (error) => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment');
      },
    });
  }
}
