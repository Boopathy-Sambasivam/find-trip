import { Injectable } from '@angular/core';

import { MockData } from './mock/mock';

@Injectable()
export class GetTripService {

  constructor() { }

  fetchBookingData(id: string): Promise<any> {
    return new Promise(resolve => {
      // Simulate server latency with 400ms delay
      setTimeout(() => resolve(MockData), 400);
    });
  }

}
