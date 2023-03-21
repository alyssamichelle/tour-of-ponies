// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: "dashboard", component: DashboardComponent, title: "Dashboard"},
//   { path: "heroes", component: HeroesComponent, title: "Heroes"},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [ RouterModule ]
// })
// export class AppRoutingModule {}

// export const APP_ROUTES: Routes = [
//     {
//         path: '',
//         pathMatch: 'full',
//         redirectTo: 'home'
//     },
//     {
//         path: 'home',
//         component: HomeComponent
//     },

//     // Option 1: Lazy Loading another Routing Config
//     {
//         path: 'flight-booking',
//         loadChildren: () =>
//             import('./booking/flight-booking.routes')
//                 .then(m => m.FLIGHT_BOOKING_ROUTES)
//     },

//     // Option 2: Directly Lazy Loading a Standalone Component
//     {
//         path: 'next-flight',
//         loadComponent: () => 
//             import('./next-flight/next-flight.component')
//                 .then(m => m.NextFlightComponent)
//     },
//     [...]
// ];


import { Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: "dashboard", component: DashboardComponent, title: "Dashboard"},
  { path: "heroes", component: HeroesComponent, title: "Heroes"},
];



