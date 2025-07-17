import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  public apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  public searchCountryByAlphaCode(id: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of()),
      delay(2000)
    );
  }
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  public searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.getCountriesRequest(url);
  }
  public searchByCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.getCountriesRequest(url);
  }

  public searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
