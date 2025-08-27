import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl mb-5">{{ title }}</h1> `,
})
export class TitleComponent {
  @Input({ required: true, alias: 'title-pro' }) title!: string;
}
