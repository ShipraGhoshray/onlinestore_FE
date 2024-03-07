import { TestBed } from '@angular/core/testing';

import { OnlinestoreService } from './onlinestore.service';

describe('OnlinestoreService', () => {
  let service: OnlinestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlinestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
