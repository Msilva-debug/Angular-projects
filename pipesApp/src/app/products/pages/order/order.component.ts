import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Aquaman',
      canFly: false,
      color: Color.blue,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red,
    },
  ];

  public displayedColumns: string[] = ['Nombre', 'Vuela', 'Color'];

  public toggleToUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
}
