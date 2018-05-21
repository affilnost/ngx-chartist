import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePieChartComponent } from './simple-pie-chart.component';

describe('SimplePieChartComponent', () => {
  let component: SimplePieChartComponent;
  let fixture: ComponentFixture<SimplePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
