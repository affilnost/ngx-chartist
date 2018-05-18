import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineInterpolationComponent } from './line-interpolation.component';

describe('LineInterpolationComponent', () => {
  let component: LineInterpolationComponent;
  let fixture: ComponentFixture<LineInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
