import { TestBed } from '@angular/core/testing';

import { MinimalService } from './minimal.service';

describe('MinimalService', () => {
  let service: MinimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
