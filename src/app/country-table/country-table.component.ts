import { Component, OnInit } from '@angular/core';
import { CountryService, Country } from '../country.service';
import { prominent } from 'color.js';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
  providers: [CountryService]
})
export class CountryTableComponent implements OnInit {
  private countryService: CountryService;
  public selected!: Country;
  private selectedProminent: any;

  constructor(countryService: CountryService) {
    countryService.fetchCountries();
    this.countryService = countryService;
    this.countryService.getCountry.subscribe( async (country) => {
      this.selected = country;
      this.selectedProminent = await prominent(country.flags.png);
    });
  }

  ngOnInit(): void {

  }

  countries() {
    return this.countryService.getCountries();
  }

  country() {
    return this.selected;
  }

  prominent() {
    return this.selectedProminent;
  }

  onClickHandler(country: Country) {
    this.countryService.selectCountry(country);
  }
}
