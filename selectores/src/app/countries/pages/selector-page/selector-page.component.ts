import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import {
  Country,
  Region,
  SmallCountry,
} from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent implements OnInit {
  public formSelectorPage: FormGroup = new FormGroup({});
  public infoCountries: SmallCountry[] = [];
  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.formSelectorPage = this.fb.group({
      region: ['', [Validators.required]],
      country: ['', [Validators.required]],
      borders: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.onRegionChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    const formControlRegion = this.formSelectorPage.get('region');
    formControlRegion!.valueChanges
      .pipe(
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        ),
        tap((countries) => (this.infoCountries = countries))
      )
      .subscribe();
  }

  get countries(): SmallCountry[] {
    return [...this.infoCountries];
  }
}
