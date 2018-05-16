import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingEventsToReplaceGraphicsComponent } from './using-events-to-replace-graphics.component';

describe('UsingEventsToReplaceGraphicsComponent', () => {
  let component: UsingEventsToReplaceGraphicsComponent;
  let fixture: ComponentFixture<UsingEventsToReplaceGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingEventsToReplaceGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingEventsToReplaceGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
