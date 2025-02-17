import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  listHeroNames: string[] = [
    'Spiderman',
    'IronMan',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  eliminatedHero?: string = '';

  deleteLastHeroe = (): void => {
    this.eliminatedHero = this.listHeroNames.pop();
  };
}
