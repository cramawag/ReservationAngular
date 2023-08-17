import { TestBed } from '@angular/core/testing';

import { LovesItemService } from './loves-item.service';

describe('LovesItemService', () => {
  let service: LovesItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LovesItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
