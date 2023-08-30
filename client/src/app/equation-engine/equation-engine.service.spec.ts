import { TestBed } from '@angular/core/testing';

import { EquationEngineService } from './equation-engine.service';

describe('EquationEngineService', () => {
  let service: EquationEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquationEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
