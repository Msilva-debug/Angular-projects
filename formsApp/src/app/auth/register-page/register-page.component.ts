import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public formGroup: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }
}
