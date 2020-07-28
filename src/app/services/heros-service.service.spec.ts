import { TestBed } from '@angular/core/testing';

import { HerosServiceService } from './heros-service.service';

describe('HerosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerosServiceService = TestBed.get(HerosServiceService);
    expect(service).toBeTruthy();
  });
});
