import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'dashboard-page-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `<shared-title [title-pro]="currentFramework()" />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>`,
  styles: ``,
})
export class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change-detection - ${this.frameworkAsSignal().name}`
  );
  public frameworkAsSignal = signal({ name: 'Angular', releaseUpdate: 2016 });
  public frameworkAsProperty = { name: 'Angular', releaseUpdate: 2016 };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => {
        return {
          ...value,
          name: 'React',
        };
      });
    }, 3000);
  }
}
