import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiPolarLineChartComponent } from './bi-polar-line-chart.component';

describe('BiPolarLineChartComponent', () => {
  let component: BiPolarLineChartComponent;
  let fixture: ComponentFixture<BiPolarLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiPolarLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiPolarLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
