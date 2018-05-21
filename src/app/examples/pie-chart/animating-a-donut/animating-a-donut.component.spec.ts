import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatingADonutComponent } from './animating-a-donut.component';

describe('AnimatingADonutComponent', () => {
  let component: AnimatingADonutComponent;
  let fixture: ComponentFixture<AnimatingADonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatingADonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatingADonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
