import { TestBed } from '@angular/core/testing';

import { DataAppService } from './data-app.service';

describe('DataAppService', () => {
  let service: DataAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
