import { Component, Input } from '@angular/core';
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
    { genreName: 'pop' },
    { genreName: 'hiphop' },
    { genreName: 'jazz' },
    { genreName: 'other' },
  ];

  constructor(private worksService: WorksService) {}

  ngOnInit(): void {

  }
}