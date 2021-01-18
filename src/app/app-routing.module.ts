import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBandsComponent } from './components/list-bands/list-bands.component';
import { LandingComponent } from './components/landing/landing.component'



const routes: Routes = [

  { path: '', redirectTo: '/app-landing', pathMatch: 'full' },
  {
    path: 'app-landing',
    component: LandingComponent
  },
  {
    path: 'app-list-bands',
    component: ListBandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
