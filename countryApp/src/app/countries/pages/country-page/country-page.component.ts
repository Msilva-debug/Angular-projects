import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit, OnDestroy {
  public subs: SubSink = new SubSink();
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.subs.add(
      this.activatedRoute.params.subscribe(({ id }) => {
        this.countriesService
          .searchCountryByAlphaCode(id)
          .subscribe((country) => console.log(country));
      })
    );
  }
}
