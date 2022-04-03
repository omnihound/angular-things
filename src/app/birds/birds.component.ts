import { Component, Input, OnInit } from '@angular/core';
import { CountryService, Country } from '../country.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css'],
  providers: [CountryService]
})
export class BirdsComponent implements OnInit{

  @Input() country!: Country;
  @Input() prominent!: number[][];
  constructor() { 

  }

  ngOnInit(): void {
    
  }

  public prominentColorByIndex(index: number) {
    if (!this.prominent) return ('rgb(0,0,0)');
    const indexedColor: number[] = this.prominent[index];
    if (!indexedColor) return ('rgb(0,0,0)');

    return `rgb(${indexedColor[0]}, ${indexedColor[1]}, ${indexedColor[2]})`;
  }
}
