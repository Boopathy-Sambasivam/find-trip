import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {isUndefined} from 'util';

import { GetTripService } from '../get-trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  booking;
  bookingCode;
  checkedIn;
  constructor(private route: ActivatedRoute, private getDetailsService: GetTripService, private router: Router) { }

  ngOnInit() {
    this.checkedIn = false;
    this.route.params
      .map(params => {
        this.bookingCode = params['id'];
        return this.bookingCode;
      }).subscribe((bookingId) => {
      if (isUndefined (bookingId)) {
        this.router.navigate(['/find-trip']);
      } else {
        this.getBookingData(bookingId);
      }
    });
  };

  getBookingData(bookingId) {
    this.getDetailsService.fetchBookingData(bookingId).then (
      data => { this.booking =  data; });
  };
  checkin() {
    this.checkedIn = true;
  }
}
