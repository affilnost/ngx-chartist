import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeChartUsingFillComponent } from './gauge-chart-using-fill.component';

describe('GaugeChartUsingFillComponent', () => {
  let component: GaugeChartUsingFillComponent;
  let fixture: ComponentFixture<GaugeChartUsingFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeChartUsingFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeChartUsingFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
