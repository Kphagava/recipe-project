import { TestBed } from '@angular/core/testing';

import { VirtualStorageService } from './virtual-storage.service';

describe('VirtualStorageService', () => {
  let service: VirtualStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

