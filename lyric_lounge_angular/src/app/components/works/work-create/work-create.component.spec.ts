import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCreateComponent } from './work-create.component';

describe('WorksCreateComponent', () => {
  let component: WorksCreateComponent;
  let fixture: ComponentFixture<WorksCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksCreateComponent]
    });
    fixture = TestBed.createComponent(WorksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
