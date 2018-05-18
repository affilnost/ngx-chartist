import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledHolesInDataComponent } from './filled-holes-in-data.component';

describe('FilledHolesInDataComponent', () => {
  let component: FilledHolesInDataComponent;
  let fixture: ComponentFixture<FilledHolesInDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilledHolesInDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledHolesInDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
