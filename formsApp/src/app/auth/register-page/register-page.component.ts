import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public formGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {
    this.formGroup = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(validatorsService.firstNameAndLastnamePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(validatorsService.emailPattern),
        ],
      ],
      userName: ['', [Validators.required, validatorsService.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    });
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.formGroup, field);
  }
  onSubmit() {
    this.formGroup.markAllAsTouched();
  }
}
