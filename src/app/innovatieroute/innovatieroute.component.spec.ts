import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovatierouteComponent } from './innovatieroute.component';

describe('InnovatierouteComponent', () => {
  let component: InnovatierouteComponent;
  let fixture: ComponentFixture<InnovatierouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovatierouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovatierouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
