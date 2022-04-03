import { Injectable } from "@angular/core";
import { ApiClient } from "./api-client";
import {BehaviorSubject, Observable, filter} from 'rxjs';

interface Name {
    common: string,
    official: string
}

export interface Country {
    name: Name,
    population: number,
    coatOfArms: Image,
    flags: Image
}

interface Image {
    png: string,
    svg: string
}

@Injectable({
	providedIn: "root"
})
export class CountryService {
    private countries: Country[] = [];
    private country: BehaviorSubject<Country> = new BehaviorSubject({
        "flags": {
            "png": "https://flagcdn.com/w320/bq.png",
            "svg": "https://flagcdn.com/bq.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/bq.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/bq.svg"
        },
        "name": {
            "common": "Caribbean Netherlands",
            "official": "Bonaire, Sint Eustatius and Saba"
        },
        "population": 25987
    });
  
    constructor(private backend: ApiClient) { 
    }

    async fetchCountries() {
        this.countries = await this.backend.get({url: 'https://restcountries.com/v3.1/lang/english?fields=name,population,car,flags,coatOfArms'});
    }

    getCountries() {
        return this.countries;
    }

    selectCountry(country: Country) {
        this.country.next(country);
    }

    get getCountry(): Observable<Country>  {
        return this.country.asObservable();
    }
}