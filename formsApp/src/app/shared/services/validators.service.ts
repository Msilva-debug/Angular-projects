import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string =
    '([\u00F1a-zA-Z]+) ([\u00F1a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor() {}

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  };

  public isValidField(myForm: FormGroup, field: string): boolean | null {
    return myForm.controls[field].errors && myForm.controls[field].touched;
  }

  public validateSecondPasswords = (formGroup: FormGroup) => {
    console.log('uwu')
    const password = formGroup.controls['password'].value;
    const password2 = formGroup.controls['password2'].value;

    if (password === password2) return null;

    return { errorPassword: true };
  };

  public getFieldError(field: string, formGroup: FormGroup): string | null {
    if (!formGroup.controls[field].errors) {
      return null;
    }

    const errors = formGroup.controls[field].errors;
    if (errors['errorPassword']) {
      return 'No coinciden las contraseñas';
    } else {
      return 'Este campo es requerido';
    }
  }

}
