import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlappingBarsOnMobileComponent } from './overlapping-bars-on-mobile.component';

describe('OverlappingBarsOnMobileComponent', () => {
  let component: OverlappingBarsOnMobileComponent;
  let fixture: ComponentFixture<OverlappingBarsOnMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlappingBarsOnMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlappingBarsOnMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
