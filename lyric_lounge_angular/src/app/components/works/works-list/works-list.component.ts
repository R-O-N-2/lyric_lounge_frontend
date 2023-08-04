import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss'],
})
export class WorksListComponent implements OnInit, OnDestroy {
  works: Work[] = [];
  private worksSub: Subscription;

  constructor(public worksService: WorksService) {}
  
  ngOnDestroy(): void {
    this.worksSub.unsubscribe();
  }

  ngOnInit(): void {
    this.works = this.worksService.getWorks();
    this.worksSub = this.worksService
      .getWorksUpdateListener()
      .subscribe((works: Work[]) => {
        this.works = works;
      });
  }
}
