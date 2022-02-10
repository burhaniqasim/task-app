import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskFormComponent } from './addtask-form.component';

describe('AddtaskFormComponent', () => {
  let component: AddtaskFormComponent;
  let fixture: ComponentFixture<AddtaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtaskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
