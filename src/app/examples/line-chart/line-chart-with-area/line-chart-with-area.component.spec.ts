import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartWithAreaComponent } from './line-chart-with-area.component';

describe('LineChartWithAreaComponent', () => {
  let component: LineChartWithAreaComponent;
  let fixture: ComponentFixture<LineChartWithAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartWithAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartWithAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
