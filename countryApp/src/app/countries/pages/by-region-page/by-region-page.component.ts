import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnDestroy, OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  public subs: SubSink = new SubSink();
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }
  searchByRegion(event: Region): void {
    this.selectedRegion = event;
    this.subs.add(
      this.countriesService
        .searchByRegion(event)
        .subscribe((countries) => (this.countries = countries))
    );
  }
}
