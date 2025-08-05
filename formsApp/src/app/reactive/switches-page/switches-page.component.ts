import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent {
  public myForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {
    this.resetForm();
  }

  resetForm() {
    this.myForm = this.fb.group({
      gender: ['F', Validators.required],
      wantNotifications: [true, Validators.requiredTrue],
      termsAndConditions: [false, Validators.requiredTrue],
    });
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.resetForm();
  }
  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }
}
