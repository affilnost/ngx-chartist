import { TestBed, inject } from '@angular/core/testing';

import { ChartistService } from './chartist.service';

describe('ChartistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartistService]
    });
  });

  it('should be created', inject([ChartistService], (service: ChartistService) => {
    expect(service).toBeTruthy();
  }));
});
