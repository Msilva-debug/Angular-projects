import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public isSortBy: keyof Hero | '' = '';
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
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Cyborg',
      canFly: false,
      color: Color.gray,
    },
    {
      name: 'Martian Manhunter',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Hawkman',
      canFly: true,
      color: Color.brown,
    },
    {
      name: 'Zatanna',
      canFly: false,
      color: Color.purple,
    },
  ];

  public displayedColumns: string[] = ['Nombre', 'Vuela', 'Color'];

  public toggleToUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeSortBy(value: keyof Hero) {
    this.isSortBy = value;
  }
}
