import { TestBed, inject } from '@angular/core/testing';

import { RouteserviceService } from './routeservice.service';

describe('RouteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteserviceService]
    });
  });

  it('should be created', inject([RouteserviceService], (service: RouteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
