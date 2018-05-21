import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineLabelsComponent } from './multi-line-labels.component';

describe('MultiLineLabelsComponent', () => {
  let component: MultiLineLabelsComponent;
  let fixture: ComponentFixture<MultiLineLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLineLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLineLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
