import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremeResponsiveConfigurationComponent } from './extreme-responsive-configuration.component';

describe('ExtremeResponsiveConfigurationComponent', () => {
  let component: ExtremeResponsiveConfigurationComponent;
  let fixture: ComponentFixture<ExtremeResponsiveConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremeResponsiveConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremeResponsiveConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
