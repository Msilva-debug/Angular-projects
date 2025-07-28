import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | ''): Hero[] {
    const heroesCopy = [...heroes];
    switch (sortBy) {
      case 'name':
        return heroesCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'canFly':
        return heroesCopy.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
      case 'color':
        return heroesCopy.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heroesCopy;
    }
  }
}
