/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetTripService } from './get-trip.service';

describe('GetTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTripService]
    });
  });

  it('should ...', inject([GetTripService], (service: GetTripService) => {
    expect(service).toBeTruthy();
  }));
});
