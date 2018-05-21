import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPlacementComponent } from './label-placement.component';

describe('LabelPlacementComponent', () => {
  let component: LabelPlacementComponent;
  let fixture: ComponentFixture<LabelPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
