import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [],
  template: `<div class="heavy-loaders-slow">
    <h2>Heavy Loaders (Slow)</h2>
    <p>This component is for displaying heavy loaders that are slow.</p>
  </div>`,
})
export class HeavyLoadersSlowComponent {}
