import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public toggleToUpperCase() {
    console.log('KASDAKSD')
    this.isUpperCase = !this.isUpperCase;
  }
}
