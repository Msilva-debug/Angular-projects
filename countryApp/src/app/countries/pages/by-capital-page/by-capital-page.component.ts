import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnDestroy, OnInit {
  public subs: SubSink = new SubSink();
  public isLoading: boolean = false;
  public countries: Country[] = [];
  public initialValue: string = '';
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }
  public searchByCapital(event: string): void {
    this.isLoading = true;
    this.subs.add(
      this.countriesService
        .searchByCapital(event)
        .subscribe((countries) => (this.countries = countries))
    );
  }
}
