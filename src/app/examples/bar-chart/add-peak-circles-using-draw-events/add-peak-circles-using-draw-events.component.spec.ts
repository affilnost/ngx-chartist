import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeakCirclesUsingDrawEventsComponent } from './add-peak-circles-using-draw-events.component';

describe('AddPeakCirclesUsingDrawEventsComponent', () => {
  let component: AddPeakCirclesUsingDrawEventsComponent;
  let fixture: ComponentFixture<AddPeakCirclesUsingDrawEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeakCirclesUsingDrawEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeakCirclesUsingDrawEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
