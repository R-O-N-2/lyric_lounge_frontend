import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit{
  // @Input() work?: Work;
  // @Input() works: Work[] = []
  works: Work[] = []
  // private postSub: Subscription;
  
  constructor(public worksService: WorksService){}
  
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

  getWorks() {
    return this.worksService.getWorks().subscribe({
      next: response => this.works = response,
      error: error => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment')
      }
    })
  }
    //next: (response: any) => this.works = response,

}
