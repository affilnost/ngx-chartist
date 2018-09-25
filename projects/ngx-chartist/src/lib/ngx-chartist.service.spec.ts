import { TestBed } from '@angular/core/testing';

import { NgxChartistService } from './ngx-chartist.service';

describe('NgxChartistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxChartistService = TestBed.get(NgxChartistService);
    expect(service).toBeTruthy();
  });
});
