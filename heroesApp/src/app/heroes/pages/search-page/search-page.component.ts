import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero: Hero | undefined;
  constructor(private heroesService: HeroesService) {}
  public onSearchChange() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  public onSelectedOption(event: MatAutocompleteActivatedEvent): void {
    if (!event.option?.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
    this.heroes = [];
  }
}
