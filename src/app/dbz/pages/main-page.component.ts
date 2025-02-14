import { Component } from '@angular/core';
import { Character } from '../interfaces/character-interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 10001,
    },
    {
      name: 'Vegetta',
      power: 10000,
    },
  ];

  onNewCharacter = (characterEmiter: Character): void => {
    this.characters = [...this.characters, characterEmiter];
  };
}
