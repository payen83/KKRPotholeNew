import { TestBed } from '@angular/core/testing';

import { AduanService } from './aduan.service';

describe('AduanService', () => {
  let service: AduanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AduanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
