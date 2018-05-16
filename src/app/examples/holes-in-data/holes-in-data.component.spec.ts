import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolesInDataComponent } from './holes-in-data.component';

describe('HolesInDataComponent', () => {
  let component: HolesInDataComponent;
  let fixture: ComponentFixture<HolesInDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolesInDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolesInDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
