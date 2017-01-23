import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FindTripComponent } from './find-trip/find-trip.component';
import {routes} from './app.routes';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { GetTripService } from './get-trip.service';

@NgModule({
  declarations: [
    AppComponent,
    FindTripComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [GetTripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
