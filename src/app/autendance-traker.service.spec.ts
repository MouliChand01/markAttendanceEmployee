import { TestBed } from '@angular/core/testing';

import { AutendanceTrakerService } from './autendance-traker.service';

describe('AutendanceTrakerService', () => {
  let service: AutendanceTrakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutendanceTrakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
