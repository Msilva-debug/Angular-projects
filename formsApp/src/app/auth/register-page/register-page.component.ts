import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidatorsService } from '../../shared/services/validators.service';
import { EmailValidatorService } from '../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public formGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {
    this.formGroup = this.fb.group(
      {
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
          [emailValidator],
        ],
        userName: ['', [Validators.required, validatorsService.cantBeStrider]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required], []],
      },
      { validators: validatorsService.validateSecondPasswords }
    );
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.formGroup, field);
  }
  getFieldError(field: string): string | null {
    const error = this.validatorsService.getFieldError(field, this.formGroup);
    return error;
  }
  onSubmit() {
    this.formGroup.markAllAsTouched();
  }

  get getGroupError(): string | null {
    if (!this.formGroup.errors) {
      return null;
    }

    return 'No coinciden las contraseñas';
  }

  get isValidGroup() {
    return this.formGroup.errors && this.formGroup.touched;
  }
}
