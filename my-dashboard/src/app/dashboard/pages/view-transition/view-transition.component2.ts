import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [TitleComponent],
  template: `<shared-title title-pro="View Transition - 2" />
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div style="view-transition-name: hero2" class="bg-blue-500 w-56 h-56"></div>
    </section>`,
  styles: ``,
})
export class ViewTransitionComponent {}
