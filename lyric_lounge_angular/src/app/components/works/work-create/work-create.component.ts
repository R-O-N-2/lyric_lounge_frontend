import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.scss'],
})
export class WorksCreateComponent implements OnInit {
@Input() work?:Work
works: Work[] = []
// private postSub: Subscription;

  enteredTitle = '';
  enteredContent = ''

  constructor(public worksService: WorksService){}

  ngOnInit(): void {}

  addWorks() {


  }
}