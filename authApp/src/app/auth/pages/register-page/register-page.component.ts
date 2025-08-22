import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private route = inject(Router);
  public formRegister = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  register = () => {
    if (this.formRegister.invalid) return;
    const { name, email, password } = this.formRegister.value;
    this.authService.register(name!, email!, password!).subscribe({
      next: () => {
        Swal.fire({
          title: 'Registrado con exito',
          icon: 'success',
          draggable: true,
        }).then((result) => {
          this.route.navigateByUrl('/auth/login');
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
