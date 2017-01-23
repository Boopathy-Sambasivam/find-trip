import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.css']
})
export class FindTripComponent implements OnInit {

  findTripForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.findTripForm = this.fb.group({
      bookingCode: ['', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]

    });
  }
  retriveCheckin() {
    this.router.navigate(['/trip-details', {id : this.findTripForm.controls['bookingCode']['value']}]);
  }

}
