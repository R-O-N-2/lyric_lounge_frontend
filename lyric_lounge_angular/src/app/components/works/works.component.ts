import { Component } from '@angular/core';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  works: Work[] = [];
  
  constructor(private worksService: WorksService){}
  
  ngOnInit(): void {
    
    this.worksService.getWorks().subscribe({
      next: response => this.works = response,
      error: error => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment')
      }
    })
  }
}
