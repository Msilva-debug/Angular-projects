import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }
  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field].errors) {
      return null;
    }
    const errors = this.myForm.controls[field].errors;
    if (errors['required']) {
      return 'Este campo es requerido';
    } else if (errors['minlength']) {
      return `Debe de tener al menos ${errors['minlength'].requiredLength} letras`;
    } else if (errors['min']) {
      return `El valor mínimo es ${errors['min'].min}`;
    }
    return null;
  }

  onSave(): void {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
