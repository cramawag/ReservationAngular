import { TestBed } from '@angular/core/testing';

import { HasItemService } from './has-item.service';

describe('HasItemService', () => {
  let service: HasItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
