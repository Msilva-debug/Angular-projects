import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  public formAuth: FormGroup = this.fb.group({
    email: [
      'mateocelis1550@gmail.com',
      [Validators.email, Validators.required],
    ],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  login = () => {
    const { email, password } = this.formAuth.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        Swal.fire({
          title: 'Sesión iniciada con exito!',
          icon: 'success',
          draggable: true,
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      },
    });
  };
}
