import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character-interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Vegeta', power: 9000 },
    { id: uuid(), name: 'Goku', power: 10000 },
    { id: uuid(), name: 'Krilin', power: 3000 },
  ];

  onNewCharacter = (characterEmiter: Character): void => {
    characterEmiter.id = uuid();
    this.characters = [...this.characters, characterEmiter];
  };

  onDeleteCharacter = (characterList: Character[]) => {
    this.characters = characterList;
  };
}
