import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Work } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WokItemComponent implements OnInit{
  enteredTitle = "";
  enteredContent = "";
  enterGenre = ""
  @Input() work: Work[] = []

  constructor(private workService: WorksService) {}
    ngOnInit(): void {
    }

    onAddWorks(form: NgForm) {
      if(form.invalid) {
        return
      }

      this.workService.addWorks(form.value.title, form.value.content, form.value.genre,'','')
  
    }
    


    // Create methos that pulls user specific works
    // getUserWorks() {
    //   this.workService.getWorksByUsername().subscribe({
    //     next: response => console.log(response),
    //     error: error => console.log(error),
    //     complete: () => {
    //       console.log('received user works');
    //       console.log('works nigga');
    //     }
    //   })
    // }
}
