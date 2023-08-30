import { TestBed } from '@angular/core/testing';

import { ApiMiddlewearService } from './api-middlewear.service';

describe('ApiMiddlewearService', () => {
  let service: ApiMiddlewearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMiddlewearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
