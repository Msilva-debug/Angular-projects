import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = new FormGroup({});
  public newFavoriteGame: FormControl = new FormControl(
    '',
    Validators.required
  );
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      favoriteGames: this.fb.array([
        ['Metal Gear Solid', Validators.required],
        ['The Legend of Zelda', Validators.required],
        ['Final Fantasy VII', Validators.required],
      ]),
    });
  }
  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
    this.favoriteGames.clear();
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
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

  isValidFieldArray(formArray: FormArray, index: number): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }
  onDeleteFavoriteGame(index: number): void {
    this.favoriteGames.removeAt(index);
  }
  onAddFavoriteGame(): void {
    if (this.newFavoriteGame.invalid) return;

    const newFavoriteGame = this.newFavoriteGame.value;
    this.favoriteGames.push(
      this.fb.control(newFavoriteGame, Validators.required)
    );
    this.newFavoriteGame.reset();
  }
}
