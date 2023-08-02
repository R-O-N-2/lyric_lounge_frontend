import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/models/works.model';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.scss'],
})
export class WorksCreateComponent implements OnInit {
@Input() work?:Work

  enteredValue = '';
  newWorks = 'Blah';

  constructor() {}

  ngOnInit(): void {}

  addWorks() {
    this.newWorks = this.enteredValue;
  }
}