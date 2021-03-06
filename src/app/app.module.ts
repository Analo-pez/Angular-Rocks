import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBandsComponent } from './components/list-bands/list-bands.component';
import { LandingComponent } from './components/landing/landing.component'
import { HttpClientModule } from '@angular/common/http';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SearchComponent } from './components/search/search.component';
import { Embed } from './pipes/embed.pipe';
import { AddBandComponent } from './components/add-band/add-band.component';
import { ResultComponent } from './components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoadingComponent } from './components/loading/loading.component';





@NgModule({
  declarations: [
    AppComponent,
    ListBandsComponent,
    LandingComponent,
    BandDetailComponent,
    DomseguroPipe,
    Embed,
    SearchComponent,
    AddBandComponent,
    ResultComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddBandComponent]
})
export class AppModule { }
