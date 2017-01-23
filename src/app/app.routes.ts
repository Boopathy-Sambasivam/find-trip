import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindTripComponent } from './find-trip/find-trip.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';

export const router: Routes = [
  {path : '', redirectTo: 'find-trip', pathMatch: 'full'},
  {path : 'find-trip', component : FindTripComponent},
  {path : 'trip-details', component : TripDetailsComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
