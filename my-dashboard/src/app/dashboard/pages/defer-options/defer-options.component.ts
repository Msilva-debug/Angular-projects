import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export class DeferOptionsComponent {

}
