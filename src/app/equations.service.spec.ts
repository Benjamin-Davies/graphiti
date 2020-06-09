import { TestBed } from '@angular/core/testing';

import { EquationsService } from './equations.service';

describe('EquationsService', () => {
  let service: EquationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
