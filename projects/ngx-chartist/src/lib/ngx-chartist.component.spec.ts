import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartistComponent } from './ngx-chartist.component';

describe('NgxChartistComponent', () => {
  let component: NgxChartistComponent;
  let fixture: ComponentFixture<NgxChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
