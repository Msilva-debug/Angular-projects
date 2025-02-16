import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 9999,
    },
  ];

  deleteCharacter = (idCharacter: number): void => {
    this.charactersList = [...this.charactersList.slice(0, idCharacter), ...this.charactersList.slice(idCharacter += 1 , this.charactersList.length)]
  };
}
