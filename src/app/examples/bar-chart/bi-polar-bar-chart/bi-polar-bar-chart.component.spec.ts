import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiPolarBarChartComponent } from './bi-polar-bar-chart.component';

describe('BiPolarBarChartComponent', () => {
  let component: BiPolarBarChartComponent;
  let fixture: ComponentFixture<BiPolarBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiPolarBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiPolarBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
