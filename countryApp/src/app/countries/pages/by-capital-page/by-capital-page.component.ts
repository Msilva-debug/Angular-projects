import { Component, OnDestroy } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnDestroy {
  public subs: SubSink = new SubSink();
  public countries: Country[] = [];
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  constructor(private countriesService: CountriesService) {}
  public searchByCapital(event: string): void {
    this.subs.add(
      this.countriesService
        .searchByCapital(event)
        .subscribe(
          (countries) => (this.countries = countries)
        )
    );
  }
}
