import { Component, OnDestroy } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnDestroy {
  public countries: Country[] = [];

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  public subs: SubSink = new SubSink();
  constructor(private countriesService: CountriesService) {}
  searchByRegion(event: string): void {
    this.subs.add(
      this.countriesService
        .searchByRegion(event)
        .subscribe((countries) => (this.countries = countries))
    );
  }
}
