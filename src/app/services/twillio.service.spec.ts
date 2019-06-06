import { TestBed } from '@angular/core/testing';

import { TwillioService } from './twillio.service';

describe('TwillioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwillioService = TestBed.get(TwillioService);
    expect(service).toBeTruthy();
  });
});
