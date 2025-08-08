import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
