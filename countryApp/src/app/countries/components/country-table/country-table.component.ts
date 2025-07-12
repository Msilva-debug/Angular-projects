import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class CountryTableComponent implements OnInit{
  ngOnInit(): void {
    console.log('Estoy entrando:D')
  }
  @Input() countries: Country[] = [];
}
