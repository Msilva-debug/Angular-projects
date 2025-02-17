import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {
  heroe: string = 'Iron Man';
  heroeName: string = 'Tony Stark';
  age: number = 46;

  get capitalizedName(): string {
    return this.heroeName.toUpperCase();
  }

  heroeDescripcion = (): string => `${this.heroeName} -  ${this.age}`;
  changeHero = (): void => {
    this.heroe = 'Spider Man';
    this.heroeName = 'Peter Parker';
  };
  changeAge = (): void => {
    this.age = 26;
  };

  resetForm = (): void => {
    this.heroe = 'Iron Man';
    this.heroeName = 'Tony Stark';
    this.age = 46;
  };
}
