/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

import { FindTripComponent } from './find-trip.component';

describe('FindTripComponent', () => {
  let comp: FindTripComponent;
  let router: Router;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    comp = new FindTripComponent(formBuilder, router);
    comp.ngOnInit();
  });

  it('FindTripComponent should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('findTripForm should be defined', () => {
    expect(comp.findTripForm).toBeDefined();
  });

  it('should create be invalid for blank booking code', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['abc', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for booking code less than min length 5', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['AAAA', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['abc', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for booking code exceeds max length 6', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['AAAAAAA', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['abc', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for booking code contains invlid numbers (0,1)', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['AAAAA1', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['abc', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for blank family name', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['Abcdef', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for family name less than min length 2', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['Abcdef', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['a', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for family name exceeds max length 30', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['AAAAAAA', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for family name contains invalid charaters (0-9)', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['AAAAA1', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['ab99c', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });

  it('should create be invalid for family name contains invalid charaters (special characters)', () => {
    comp.findTripForm = formBuilder.group({
      bookingcode: ['AAAAA1', [Validators.required, Validators.pattern('[a-zA-Z2-9]{5,6}')]],
      familyname: ['ab*&c', [Validators.required, Validators.pattern('[a-zA-Z]{2,30}')]]
    });
    expect(comp.findTripForm.invalid).toBeTruthy();
  });






});
