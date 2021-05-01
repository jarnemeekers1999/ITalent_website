import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarieDetailsComponent } from './seminarie-details.component';

describe('SeminarieDetailsComponent', () => {
  let component: SeminarieDetailsComponent;
  let fixture: ComponentFixture<SeminarieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
