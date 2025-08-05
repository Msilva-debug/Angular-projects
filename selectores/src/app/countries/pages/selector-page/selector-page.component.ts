import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent {
  public formSelectorPage: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.formSelectorPage = this.fb.group({
      region: ['', [Validators.required]],
      country: ['', [Validators.required]],
      borders: ['', [Validators.required]],
    });
  }
}
