import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLineChartComponent } from './simple-line-chart.component';

describe('SimpleLineChartComponent', () => {
  let component: SimpleLineChartComponent;
  let fixture: ComponentFixture<SimpleLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
