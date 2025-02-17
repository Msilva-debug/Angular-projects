import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: '',
  };

  emitCharacter = () => {
    if (!this.character.name.length) return;
    this.onNewCharacter.emit({ ...this.character });
    this.character.name = '';
    this.character.power = 0;
  };
}
