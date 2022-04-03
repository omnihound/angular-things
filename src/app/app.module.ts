import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './country.service';
import { CountryTableComponent } from './country-table/country-table.component';
import { BirdsComponent } from './birds/birds.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryTableComponent,
    BirdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
