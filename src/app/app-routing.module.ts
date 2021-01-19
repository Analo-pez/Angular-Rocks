import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBandsComponent } from './components/list-bands/list-bands.component';
import { LandingComponent } from './components/landing/landing.component'
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { SearchComponent } from './components/search/search.component';
import { AddBandComponent } from './components/add-band/add-band.component';




const routes: Routes = [

  { path: '', redirectTo: '/app-landing', pathMatch: 'full' },
  {
    path: 'app-landing',
    component: LandingComponent
  },
  {
    path: 'app-band-detail/:id',
    component: BandDetailComponent
  },
  {
    path: 'app-list-bands',
    component: ListBandsComponent,
  },
  {
    path: 'app-search',
    component: SearchComponent,
  },
  {
    path: 'app-add-band',
    component: AddBandComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
