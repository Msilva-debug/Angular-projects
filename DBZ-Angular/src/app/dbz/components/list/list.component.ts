import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  onDeleteCharacter: EventEmitter<Character[]> = new EventEmitter();

  @Input()
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 9999,
    },
  ];

  deleteCharacter = (character: Character): void => {
    this.charactersList = this.charactersList.filter(
      (objCharacter) => objCharacter.id !== character.id
    );
    this.emitDeleteCharacter();
  };

  emitDeleteCharacter = () => {
    this.onDeleteCharacter.emit(this.charactersList);
  };
}
