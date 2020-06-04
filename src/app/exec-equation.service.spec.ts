import { TestBed } from '@angular/core/testing';

import { ExecEquationService } from './exec-equation.service';

describe('ExecEquationService', () => {
  let service: ExecEquationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecEquationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
