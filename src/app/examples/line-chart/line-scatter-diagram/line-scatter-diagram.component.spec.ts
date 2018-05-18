import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineScatterDiagramComponent } from './line-scatter-diagram.component';

describe('LineScatterDiagramComponent', () => {
  let component: LineScatterDiagramComponent;
  let fixture: ComponentFixture<LineScatterDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineScatterDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineScatterDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
