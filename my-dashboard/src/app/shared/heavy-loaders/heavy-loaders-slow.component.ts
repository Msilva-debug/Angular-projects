import { Component, Input } from '@angular/core';
import { NgClass } from '../../../../node_modules/@angular/common/index';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [NgClass],
  template: `<section [ngClass]="['heavy-loader-slow', cssClass]">
    Heavy Loader Slow
  </section>`,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;
  constructor() {
    const date = Date.now();

    while (Date.now() - date < 3000) {}
    console.log('Heavy processing done');
  }
}
