import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyWholeNumbersComponent } from './only-whole-numbers.component';

describe('OnlyWholeNumbersComponent', () => {
  let component: OnlyWholeNumbersComponent;
  let fixture: ComponentFixture<OnlyWholeNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyWholeNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyWholeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
