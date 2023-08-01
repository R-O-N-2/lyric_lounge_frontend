import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.scss'],
})
export class WorksCreateComponent implements OnInit {
  enteredValue = '';
  newWorks = 'Blah';

  constructor() {}

  ngOnInit(): void {}

  addWorks() {
    this.newWorks = this.enteredValue;
  }
}