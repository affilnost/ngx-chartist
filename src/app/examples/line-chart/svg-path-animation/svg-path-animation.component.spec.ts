import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPathAnimationComponent } from './svg-path-animation.component';

describe('SvgPathAnimationComponent', () => {
  let component: SvgPathAnimationComponent;
  let fixture: ComponentFixture<SvgPathAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgPathAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPathAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
