import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import {
  Country,
  Region,
  SmallCountry,
} from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent implements OnInit {
  public formSelectorPage: FormGroup = new FormGroup({});
  public infoCountries: SmallCountry[] = [];
  public infoBorders: SmallCountry[] = [];
  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.formSelectorPage = this.fb.group({
      region: ['', [Validators.required]],
      country: ['', [Validators.required]],
      border: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    const formControlRegion = this.formSelectorPage.get('region');
    formControlRegion!.valueChanges
      .pipe(
        tap(() => this.formSelectorPage.get('country')!.setValue('')),
        tap(() => (this.infoBorders = [])),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        ),
        tap((countries) => (this.infoCountries = countries))
      )
      .subscribe();
  }

  onCountryChanged(): void {
    const formControlCountry = this.formSelectorPage.get('country');
    formControlCountry!.valueChanges
      .pipe(
        tap(() => this.formSelectorPage.get('border')!.setValue('')),
        switchMap((country) =>
          this.countriesService.getBorderByCountry(country)
        ),
        switchMap((country) =>
          this.countriesService.getCountryBordersByCodes(country.border)
        ),
        tap()
      )
      .subscribe((border) => (this.infoBorders = border));
  }

  get countries(): SmallCountry[] {
    return [...this.infoCountries];
  }

  get borders(): SmallCountry[] {
    return structuredClone(this.infoBorders);
  }
}
