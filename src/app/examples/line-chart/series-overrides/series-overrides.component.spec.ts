import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesOverridesComponent } from './series-overrides.component';

describe('SeriesOverridesComponent', () => {
  let component: SeriesOverridesComponent;
  let fixture: ComponentFixture<SeriesOverridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesOverridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesOverridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
