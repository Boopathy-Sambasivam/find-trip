/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { TripDetailsComponent } from './trip-details.component';
import { GetTripService } from '../get-trip.service';
import { MockData } from '../mock/mock';

class MockGetTripService {

  fetchBookingData() {
    return new Promise<any>((resolve, reject) => {
      resolve(MockData);
    });
  }
}

describe('TripDetailsComponent', () => {
  let comp: TripDetailsComponent;
  let fixture: ComponentFixture<TripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDetailsComponent ],
      providers: [ {provide: GetTripService, useClass: MockGetTripService}],
      imports: [RouterTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDetailsComponent);
    comp = fixture.componentInstance;


    /*getTripService = fixture.debugElement.injector.get(GetTripService);
    spy = spyOn(getTripService, 'fetchBookingData')
      .and.returnValue(Promise.resolve(testQuote));*/
    fixture.detectChanges();
  });

  it('component should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('Should get booking data', fakeAsync(() => {
    fixture.componentInstance.getBookingData('mockid');
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#booking-code').innerText).toEqual('PZIGZ3');
    expect(compiled.querySelector('#pass-name').innerText).toEqual('RUUD HESP');
    expect(compiled.querySelector('#origin').innerText).toEqual('Amsterdam (AMS)');
    expect(compiled.querySelector('#destination').innerText).toEqual('Nice (NCE)');
    expect(compiled.querySelector('#flight-number').innerText).toEqual('KL-1263');
  }));
});
