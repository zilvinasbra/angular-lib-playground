import { TestBed } from '@angular/core/testing';

import { IamusWeatherService } from './iamus-weather.service';

describe('IamusWeatherService', () => {
  let service: IamusWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamusWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
