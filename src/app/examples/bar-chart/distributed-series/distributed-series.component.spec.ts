import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedSeriesComponent } from './distributed-series.component';

describe('DistributedSeriesComponent', () => {
  let component: DistributedSeriesComponent;
  let fixture: ComponentFixture<DistributedSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributedSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
