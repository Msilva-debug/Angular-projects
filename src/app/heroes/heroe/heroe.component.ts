import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {
  heroe: string = 'IronMan';
  heroeName: string = 'Tony Stark';
  age: number = 46;
}
