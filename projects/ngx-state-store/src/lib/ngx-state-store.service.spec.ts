import { TestBed } from '@angular/core/testing';

import { NgxStateStoreService } from './ngx-state-store.service';

describe('NgxStateStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStateStoreService = TestBed.get(NgxStateStoreService);
    expect(service).toBeTruthy();
  });
});
