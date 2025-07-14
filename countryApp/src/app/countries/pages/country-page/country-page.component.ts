import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit, OnDestroy {
  public subs: SubSink = new SubSink();
  public country?: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.subs.add(
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) =>
            this.countriesService.searchCountryByAlphaCode(id)
          )
        )
        .subscribe((country) => {
          if (!country) return this.router.navigateByUrl('');
          this.country = country;
          return;
        })
    );
  }
}
