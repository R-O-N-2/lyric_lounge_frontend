import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit{
  works: any[] = [];
  
  constructor(private worksService: WorksService, private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get('http://localhost:3001/works').subscribe({
      next: (response: any) => console.log(response),
      error: error => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment')
      }
    })
  }
    //next: (response: any) => this.works = response,

}
