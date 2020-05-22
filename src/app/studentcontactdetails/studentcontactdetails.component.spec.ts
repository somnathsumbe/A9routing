import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcontactdetailsComponent } from './studentcontactdetails.component';

describe('StudentcontactdetailsComponent', () => {
  let component: StudentcontactdetailsComponent;
  let fixture: ComponentFixture<StudentcontactdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcontactdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
