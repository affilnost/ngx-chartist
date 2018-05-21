import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartWithCustomLabelsComponent } from './pie-chart-with-custom-labels.component';

describe('PieChartWithCustomLabelsComponent', () => {
  let component: PieChartWithCustomLabelsComponent;
  let fixture: ComponentFixture<PieChartWithCustomLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartWithCustomLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartWithCustomLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
