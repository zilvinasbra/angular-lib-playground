import { TestBed } from '@angular/core/testing';

import { IamusDateService } from './iamus-date.service';

describe('IamusDateService', () => {
  let service: IamusDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamusDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
