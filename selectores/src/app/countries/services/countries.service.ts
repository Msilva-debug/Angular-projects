import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor(private httpClient: HttpClient) {}

  public getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const urlGetRegion: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.httpClient.get<Country[]>(`${urlGetRegion}`).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          border: country.borders ?? [],
        }))
      )
    );
  }

  public getBorderByCountry(country: SmallCountry): Observable<SmallCountry> {
    if (!country) return of();

    const urlGetRegion: string = `${this.baseUrl}/alpha/${country}?fields=cca3,name,borders`;
    return this.httpClient.get<Country>(`${urlGetRegion}`).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        border: country.borders ?? [],
      }))
    );
  }

  public get regions(): Region[] {
    return [...this._regions];
  }
}
