import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartUsingFillComponent } from './donut-chart-using-fill.component';

describe('DonutChartUsingFillComponent', () => {
  let component: DonutChartUsingFillComponent;
  let fixture: ComponentFixture<DonutChartUsingFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutChartUsingFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartUsingFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
