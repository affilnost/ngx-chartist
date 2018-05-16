import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSmilAnimationsComponent } from './advanced-smil-animations.component';

describe('AdvancedSmilAnimationsComponent', () => {
  let component: AdvancedSmilAnimationsComponent;
  let fixture: ComponentFixture<AdvancedSmilAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSmilAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSmilAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
