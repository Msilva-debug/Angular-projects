import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  public subs: SubSink = new SubSink();
  @Input() public price: number = 0;
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.subs.add(
      interval(1000).subscribe((value) => console.log('Tick:', value))
    );
    console.log('Componente HIJO ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('Componente HIJO ngOnChanges');
  }
}
