import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesWithMomentjsComponent } from './time-series-with-momentjs.component';

describe('TimeSeriesWithMomentjsComponent', () => {
  let component: TimeSeriesWithMomentjsComponent;
  let fixture: ComponentFixture<TimeSeriesWithMomentjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSeriesWithMomentjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSeriesWithMomentjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
