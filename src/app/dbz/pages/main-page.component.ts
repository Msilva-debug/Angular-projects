import { Component } from '@angular/core';
import { Character } from '../interfaces/character-interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public characters: Character[] = [];

  onNewCharacter = (characterEmiter: Character): void => {
    this.characters = [...this.characters, characterEmiter];
  };

  onDeleteCharacter = (characterList: Character[]) => {
    this.characters = characterList;
  };
}
