import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentparantdetailsComponent } from './studentparantdetails.component';

describe('StudentparantdetailsComponent', () => {
  let component: StudentparantdetailsComponent;
  let fixture: ComponentFixture<StudentparantdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentparantdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentparantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
