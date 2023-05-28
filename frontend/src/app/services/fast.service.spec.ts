import { TestBed } from '@angular/core/testing';

import { FastService } from './fast.service';

describe('FastService', () => {
  let service: FastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
