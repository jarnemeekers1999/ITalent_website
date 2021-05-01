import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEngagementComponent } from './student-engagement.component';

describe('StudentEngagementComponent', () => {
  let component: StudentEngagementComponent;
  let fixture: ComponentFixture<StudentEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEngagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
