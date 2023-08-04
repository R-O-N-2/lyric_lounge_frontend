import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.scss'],
})
export class WorksCreateComponent {
  enteredTitle = '';
  enteredGenre = '';
  enteredContent = '';

  constructor(public worksService: WorksService) {}

  // ngOnInit(): void {}

  addWork(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.worksService.addWorks(
      form.value.title,
      form.value.genre,
      form.value.content,
      '',
      ''
    );
  }
}
