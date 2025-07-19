import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnDestroy, OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  public subs: SubSink = new SubSink();
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  searchByContry(event: string): void {
    this.subs.add(
      this.countriesService
        .searchByCountry(event)
        .subscribe((countries) => (this.countries = countries))
    );
  }
}
