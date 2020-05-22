import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentragistrationComponent } from './studentragistration.component';

describe('StudentragistrationComponent', () => {
  let component: StudentragistrationComponent;
  let fixture: ComponentFixture<StudentragistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentragistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentragistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
