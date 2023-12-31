import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit{
  enteredTitle = "";
  enteredContent = "";
  enterGenre = ""
  @Output() workCreated = new EventEmitter();
  
  works: Work[] = []

  constructor(private workService: WorksService) {}
    ngOnInit(): void {
    }

    onAddWorks(form: NgForm) {
      if(form.invalid) {
        return
      }
      this.workService.addWorks(form.value.title, form.value.content, form.value.genre,'','')
    }
}
